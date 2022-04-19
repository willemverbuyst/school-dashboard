import { useHistory } from 'react-router-dom'
import { useUser } from '../auth'

export const useTeacherGuard = () => {
	const history = useHistory()
	const { user } = useUser()

	const guardPage = () => {
		if (user?.token === null || user?.data?.user?.role !== 'TEACHER') {
			history.push('/')
		}
	}

	return { guardPage }
}
