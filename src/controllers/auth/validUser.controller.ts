import { Response } from 'express'
import { controller, get, use } from '../decorators'
import { RequestWithBody } from '../../interfaces/Requests'
import { getAllSubjects } from '../../prisma/queries/subjects'
import { getUserPlus } from '../../prisma/queries/user'
import { userAuthMiddleware } from '../../middlewares/userAuthMiddleware'
import { toJWT } from '../../auth/jwt'

@controller('/auth')
export class ValidUserController {
	@use(userAuthMiddleware)
	@get('/user')
	async getValidUser(req: RequestWithBody, res: Response): Promise<void> {
		try {
			const { userId } = req.body
			if (!userId) {
				res.status(500).send({ message: 'Something went wrong' })
				return
			}

			const token = toJWT({ userId })
			const subjects = await getAllSubjects()
			const userWithProfile = await getUserPlus(userId)

			res.status(200).send({
				token,
				data: {
					user: userWithProfile,
					subjects: { results: subjects.length, data: subjects },
				},
				message: 'Valid user',
			})
		} catch (error) {
			res.status(500).send({ message: 'Something went wrong' })
		}
	}
}
