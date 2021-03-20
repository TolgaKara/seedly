import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Footer() {
	return (
		<footer className='inset-0 h-32 bg-green-500 relative w-full mb-0'>
			<div className='p-2 m-1'>
				<p>Created by Tolga Kara</p>

				<a
					className='flex text-white'
					href='https://www.linkedin.com/in/tolgakara/'
					target='__blank'
				>
					<FaLinkedin className='mt-1 mr-1' /> LinkedIn
				</a>
				<a className='flex text-white' href='https://github.com/TolgaKara/' target='__blank'>
					<FaGithubAlt className='mt-1 mr-1' /> GitHub
				</a>
			</div>
		</footer>
	);
}

export default Footer;
