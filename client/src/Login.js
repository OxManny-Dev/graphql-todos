import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from './graphql/mutations/createUser';


export const Login = () => {
	const [createUserMutation,] = useMutation(CREATE_USER);
	const navigate = useNavigate();

	return (
		<Form
			onSubmit={async (values) => {
				console.log(values);
				await createUserMutation({
					variables: {
						...values,
					},
					onCompleted: (data) => {
						console.log(data);
						navigate('/success');
					}
				});
			}}
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			}}
			render={({values, handleSubmit, form}) => {

				return (
					<div>
						<h1>FirstName</h1>
						<Field
							name='firstName'
							component='input'
						/>
						<h1>Last Name</h1>
						<Field
							name='lastName'
							component='input'
						/>
						<h1>Email</h1>
						<Field
							name='email'
							component='input'
						/>
						<h1>Password</h1>
						<Field
							name='password'
							component='input'
							type='password'
						/>
						<button onClick={async () => {
							await handleSubmit();
							form.reset();
						}}>
							Submit
						</button>
					</div>
				)
			}}
		/>

	)
}
