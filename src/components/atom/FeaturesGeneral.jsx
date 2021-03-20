import React from "react";
import { BiRocket } from "react-icons/bi";

export const FeaturesGeneral = () => {
	return (
		<div className='features-general flex flex-wrap flex-row justify-between text-center'>
			<div className='feature-performance w-4/12 bg-white p-4 shadow-lg'>
				<BiRocket className='text-green-500 my-5 text-6xl block m-auto' />
				<h2 className='feature-title font-semibold '>Perfomance</h2>
				<p className='feature-description text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nihil? Molestiae
					suscipit facilis optio eaque hic laboriosam officia ipsam.
				</p>
			</div>
			<div className='feature-security'></div>
			<div className='feature-responsiveness'></div>
		</div>
	);
};
