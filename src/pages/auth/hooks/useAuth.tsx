import axios, { AxiosResponse } from 'axios';
import { axiosInstance } from '../../../axiosInstance';
import { Toast } from '../../../components/toast';
import { ApiUser } from '../../../models/auth.models';
import { useUser } from './useUser';

export interface ApiError {
  message: string;
}

export type AuthResponse = ApiUser | ApiError;

export const useAuth = () => {
  const serverError = 'There was an error contacting the server!';
  const { removeUser, updateUser } = useUser();

  const authServerCall = async (
    urlEndpoint: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const { data, status }: AxiosResponse<AuthResponse> = await axiosInstance(
        {
          url: urlEndpoint,
          method: 'POST',
          data: { email, password },
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!status.toString().startsWith('2')) {
        const text = data && data.message ? data.message : 'Unauthorized';
        Toast({ text, status: 'warning' });
        return;
      }

      if ('data' in data && 'token' in data && 'user' in data.data) {
        const text = data && data.message ? data.message : 'Welcome';
        Toast({ text, status: 'success' });
        updateUser(data);
      }
    } catch (errorResponse) {
      const text =
        axios.isAxiosError(errorResponse) &&
        errorResponse?.response?.data?.message
          ? errorResponse?.response?.data?.message
          : serverError;
      Toast({ text, status: 'error' });
    }
  };

  // todo add extra input
  const signup = async (email: string, password: string): Promise<void> =>
    authServerCall('/auth/signup', email, password);

  const login = async (email: string, password: string): Promise<void> =>
    authServerCall('/auth/login', email, password);

  const logout = (): void => removeUser();

  return {
    login,
    logout,
    signup,
  };
};
