import { v4 as uuidv4 } from 'uuid'
import { Teacher } from '@prisma/client'
import { schools } from './school.fixtures'
import { userTeachers } from './user.fixtures'

// import { Teacher } from '@prisma/client'
// import { schools } from './schools'
// import { userTeachers } from './users'

export const teachers: Array<Teacher> = userTeachers.map((teacher, i) => ({
	id: uuidv4(),
	schoolId: schools[i % 2].id,
	userId: teacher.id,
}))
