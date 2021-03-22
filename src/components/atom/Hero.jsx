import React from "react";
import { Button } from "./Button";
import { SectionSubHeading } from "./SectionSubHeading";
import heroImage from "../../images/heroImage.svg";

export const Hero = () => {
	return (
		<div className='cta flex justify-between items-center'>
			<div className='w-3/12'>
				<SectionSubHeading text={"Our Mission"} />
				<h1 className='mb-4 leading-7 font-semibold text-green-700'>
					Organize your Speciality Crop right now 🌻 !
				</h1>
				<p className='mb-8 text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, recusandae tempora.
					Nesciunt alias neque quaerat similique corrupti.
				</p>
				<Button type='action' text='Get Started' />
			</div>
			<div>
				<img src={heroImage} alt='Engaging hero that showcases our Mission for Farmers' />
			</div>
		</div>
	);
};
