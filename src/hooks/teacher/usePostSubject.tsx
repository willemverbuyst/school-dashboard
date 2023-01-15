import { useMutation, useQueryClient } from "react-query";
import { useUser } from "../auth/useUser";
import { axiosInstance, getJWTHeader } from "../../axiosInstance";
import { ApiUser } from "../../models/api/user.api";
import { queryKeys } from "../../react-query/constants";
import { Toast } from "../../components/toast";

export interface SubjectInput {
  subjectName: string;
}

const postSubject = async (subjectName: string, user: ApiUser | null) => {
  try {
    if (!user) return null;
    const { data } = await axiosInstance.post(
      "/subjects",
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

export const usePostSubject = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (subjectName: string) => postSubject(subjectName, user),
    {
      onSuccess: () => {
        queryClient.refetchQueries([queryKeys.USER]);
        const text = "You have added a subject";
        Toast({ text, status: "success" });
      },
    }
  );

  return mutate;
};
