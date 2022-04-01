import { useMutation, useQueryClient } from 'react-query';
import { useUser } from '../../../../auth/hooks/useUser';
import { axiosInstance, getJWTHeader } from '../../../../../axiosInstance';
import { ApiUser } from '../../../../../models/auth.models';
import { queryKeys } from '../../../../../react-query/constants';
import { Toast } from '../../../../../components/toast';

const addSubject = async (subjectName: string, user: ApiUser | null) => {
  try {
    if (!user) return null;
    const { data } = await axiosInstance.post(
      `admin/subjects`,
      {
        subjectName,
      },
      { headers: getJWTHeader(user) }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useSubject = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (subjectName: string) => addSubject(subjectName, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.USER]);
        const text = 'You have added a subject';
        Toast({ text, status: 'success' });
      },
    }
  );

  return mutate;
};
