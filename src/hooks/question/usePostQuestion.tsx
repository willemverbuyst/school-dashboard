import { useMutation, useQueryClient } from 'react-query'
import { axiosInstance, getJWTHeader } from '../../axiosInstance'
import { Toast } from '../../components/toast'
import { NewQuestion, QuestionInput } from '../../models'
import { ApiUser } from '../../models/api/user.api'
import { queryKeys } from '../../react-query/constants'
import { useUser } from '../auth/useUser'

const postQuestion = async (newQuestion: NewQuestion, user: ApiUser | null) => {
  try {
    if (!user) return null
    const { id } = newQuestion
    const { data } = await axiosInstance.post(
      `/questions/subjects/${id}`,
      newQuestion,
      {
        headers: getJWTHeader(user),
      }
    )

    return data.data
  } catch (error) {
    console.log(error)
  }
}

const buildQuestionObject = ({
  subject,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  wrongAnswer3,
}: QuestionInput): NewQuestion => ({
  id: subject,
  question,
  answer1text: correctAnswer,
  answer2text: wrongAnswer1,
  answer3text: wrongAnswer2,
  answer4text: wrongAnswer3,
  answer1bool: true,
  answer2bool: false,
  answer3bool: false,
  answer4bool: false,
})

export const usePostQuestion = () => {
  const { user } = useUser()
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    (newQuestion: any) => postQuestion(buildQuestionObject(newQuestion), user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.QUESTIONS])
        const text = 'You have added a question'
        Toast({ text, status: 'success' })
      },
    }
  )

  return mutate
}
