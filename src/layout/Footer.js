import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Footer() {
	return (
		<footer className='mx-auto mt-10 h-screen/10 flex justify-center items-center flex-col bg-green-800 text-white'>
			<p>Created by Tolga Kara</p>

			<a className='flex text-white' href='https://www.linkedin.com/in/tolgakara/' target='__blank'>
				<FaLinkedin className='mt-1 mr-1' /> LinkedIn
			</a>
			<a className='flex text-white' href='https://github.com/TolgaKara/' target='__blank'>
				<FaGithubAlt className='mt-1 mr-1' /> GitHub
			</a>
		</footer>
	);
}

export default Footer;
