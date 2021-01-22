import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
	const { login } = useAuth();
	const history = useHistory();

	function handleLogin() {
		history.push("signin");
	}

	return (
		<nav className='mx-auto shadow-md p-4 h-screen/8 flex justify-between bg-white font-semibold'>
			<NavLink
				className='logo px-1 mt-1 text-black border-2 p-2 pr-2 pl-2 rounded-lg border-green-500	'
				to='/'
			>
				🌱 Seedly
			</NavLink>
			<ul className='flex content-between my-auto'>
				<li className='px-1 mt-1 text-black-600 cursor-pointer hover:underline'>
					<NavLink to='/'>About</NavLink>
				</li>
				<li className='px-1 mt-1 ml-5 text-black-600 cursor-pointer hover:underline'>
					<NavLink to='/profile'>Features</NavLink>
				</li>
				<li className='px-1 mt-1 ml-5 text-black-600 cursor-pointer hover:underline'>
					<NavLink to='/profile'>Testimonials</NavLink>
				</li>
				<li className='px-1 mt-1 ml-5 text-black-600 cursor-pointer hover:underline'>
					<NavLink to='/profile'>Blog</NavLink>
				</li>
				<li className='px-1 ml-5 text-black-600 cursor-pointer hover:underline'>
					<button
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-lg'
						onClick={history.push("signin")}
					>
						Get started
					</button>
				</li>
			</ul>
			{/* {currentUser ? (
				<ul className='flex content-between'>
					<li className='px-1 text-white cursor-pointer hover:underline'>
						<NavLink to='/'>Dashboard</NavLink>
					</li>
					<li className='px-1 text-white cursor-pointer hover:underline'>
						<NavLink to='/profile'>Profile</NavLink>
					</li>
					<li className='px-1 text-white cursor-pointer hover:underline'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm'
							onClick={handleLogin}
						>
							Log Out
						</button>
					</li>
				</ul>
			) : null} */}
		</nav>
	);
}

export default Header;
