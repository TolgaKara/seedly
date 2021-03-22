import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Footer() {
	return (
		<footer className='inset-0 h-32 bg-green-500 relative w-full mb-0 flex justify-center'>
			<div className='p-2 m-1 text-white'>
				<p className='bg-white text-green-600 p-4 rounded-full mb-4 font-bold shadow-lg'>
					© 2021 Tolga Kara All Rights Reserved
				</p>

				<div className='flex flex-row justify-between'>
					<a className='flex' href='https://www.linkedin.com/in/tolgakara/' target='__blank'>
						<FaLinkedin className='mt-1 mr-1' /> LinkedIn
					</a>
					<a className='flex' href='https://github.com/TolgaKara/' target='__blank'>
						<FaGithubAlt className='mt-1 mr-1' /> GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
