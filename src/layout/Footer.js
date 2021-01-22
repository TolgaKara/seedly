import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Footer() {
	return (
		<footer className='mx-auto mt-10 h-screen/10 flex justify-center items-center flex-col bg-green-600 font-semibold text-white'>
			<div className='border border-white border-lg rounded-lg p-2 m-1'>
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
