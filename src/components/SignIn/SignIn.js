import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function SignIn() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			setError("Failed to log in");
		}
		setLoading(false);
	}

	return (
		<div className='flex h-full justify-center items-center'>
			<div className='flex-col bg-white rounded-lg shadow-lg'>
				<h2 className='text-center py-2'>Sign In</h2>
				{error && <p className='text-red-600 text-center text-sm'>{error}</p>}
				<form className='p-4 flex-col bg-white' onSubmit={handleSubmit}>
					<input
						type='email'
						className='border border-4 rounded my-2 p-1 block'
						placeholder='Email'
						ref={emailRef}
						required
					/>
					<input
						type='password'
						className='border rounded my-2 p-1 block'
						placeholder='Password'
						ref={passwordRef}
						required
					/>
					<button
						className='bg-green-500 text-white rounded-lg p-1 w-full'
						disabled={loading}
						type='submit'
					>
						Login
					</button>
					<p className='text-sm text-blue-700 py-2'>
						<Link to='/forgotpassword'>Forgot Password?</Link>
					</p>
				</form>
				<div className='flex-col py-2'>
					<p className='text-sm text-center'>
						If you do not have an account, please,{" "}
						<Link to='/signup' className='text-blue-700'>
							sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
