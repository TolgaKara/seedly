import React from "react";
import { BiRocket, BiShieldQuarter } from "react-icons/bi";
import { GrStackOverflow } from "react-icons/gr";

export const FeaturesGeneral = () => {
	return (
		<div className='features-general flex flex-row justify-between text-center space-x-3'>
			<div className='group feature-performance w-4/12 bg-white p-4 shadow-md hover:bg-green-500 hover:text-white duration-300'>
				<BiRocket className='text-green-500 my-5 text-6xl block m-auto ' />
				<h2 className='feature-title font-semibold '>Perfomance</h2>
				<p className='feature-description text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nihil? Molestiae
					suscipit facilis optio eaque hic laboriosam officia ipsam.
				</p>
			</div>
			<div className='feature-security w-4/12 bg-white p-4 shadow-md hover:bg-green-500 duration-300'>
				<BiShieldQuarter className='text-green-500 my-5 text-6xl block m-auto' />
				<h2 className='feature-title font-semibold '>Security</h2>
				<p className='feature-description text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nihil? Molestiae
					suscipit facilis optio eaque hic laboriosam officia ipsam.
				</p>
			</div>
			<div className='feature-responsiveness w-4/12 bg-white p-4 shadow-md'>
				<GrStackOverflow className='text-green-500 my-5 text-6xl block m-auto' />
				<h2 className='feature-title font-semibold '>Responsive</h2>
				<p className='feature-description text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nihil? Molestiae
					suscipit facilis optio eaque hic laboriosam officia ipsam.
				</p>
			</div>
		</div>
	);
};
