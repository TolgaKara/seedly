import React from "react";
import { SectionSubHeading } from "../atom/SectionSubHeading";
import heroImage from "../../images/heroImage.svg";
import { Button } from "../atom/Button";

export const Landingpage = () => {
	return (
		<div className=''>
			<div className='container mx-auto mt-16 '>
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
			</div>
		</div>
	);
};
