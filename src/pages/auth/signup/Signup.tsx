import {
	Button,
	Col,
	Form,
	Input,
	Layout,
	PageHeader,
	Radio,
	Row,
	Select,
} from 'antd'
import { ReactElement, useEffect, useState } from 'react'
import { useTeachers } from './hooks/useTeachers'
import { useSchools } from './hooks/useSchools'
import { useHistory } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

const { Content } = Layout
const { Option } = Select

const Signup = (): ReactElement => {
	const [form] = Form.useForm()
	const history = useHistory()
	const schools = useSchools()
	const teachers = useTeachers()
	const { user } = useUser()
	const roleForUrl = user?.data.user.role?.toLowerCase() + 's'
	const [showTeachers, setShowTeachers] = useState<boolean>(false)

	useEffect(() => {
		if (user !== null) {
			history.push(`/${roleForUrl}/${user.data.user.id}`)
		}
	}, [roleForUrl, user, history])

	const handleSubmit = input => {
		console.log('input :>> ', input)

		form.resetFields()
	}

	const showDropdownWithTeachers = ({ role }): void =>
		role === 'student' ? setShowTeachers(true) : setShowTeachers(false)

	const renderDropdownWithTeachers = (): ReactElement => (
		<Form.Item
			name="teacher"
			rules={[{ required: true, message: 'Please select your teacher!' }]}
		>
			<Select placeholder="Select your teacher" style={{ width: 350 }}>
				{teachers.map(({ user: { userName }, id }, i) => (
					<Option key={i} value={id}>
						{userName}
					</Option>
				))}
			</Select>
		</Form.Item>
	)

	return (
		<Content className="site-layout-content" style={{ padding: 90 }}>
			<Row justify="center">
				<PageHeader title="Signup" />
			</Row>
			<Row justify="center">
				<Col style={{ width: 350 }}>
					<Form
						form={form}
						name="basic"
						initialValues={{ remember: true }}
						onFinish={handleSubmit}
						onValuesChange={showDropdownWithTeachers}
					>
						<Form.Item
							name="role"
							rules={[{ required: true, message: 'Please select your role!' }]}
						>
							<Radio.Group>
								<Radio value="student">Student</Radio>
								<Radio value="teacher">Teacher</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item
							name="school"
							rules={[{ required: true, message: 'Please select a school!' }]}
						>
							<Select placeholder="Select a school" style={{ width: 350 }}>
								{schools.map(({ name, id }, i) => (
									<Option key={id} value={id}>
										{name}
									</Option>
								))}
							</Select>
						</Form.Item>

						{showTeachers ? renderDropdownWithTeachers() : null}

						<Form.Item
							name="fullName"
							rules={[
								{ required: true, message: 'Please input your full name!' },
							]}
						>
							<Input placeholder="Full name" />
						</Form.Item>
						<Form.Item
							name="email"
							rules={[{ required: true, message: 'Please input your email!' }]}
						>
							<Input placeholder="Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
						>
							<Input.Password placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								style={{ backgroundColor: '#B81D9D', border: 'none' }}
							>
								Signup
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Content>
	)
}

export default Signup
