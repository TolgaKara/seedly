import React from "react";
import { SectionSubHeading } from "../atom/SectionSubHeading";
import heroImage from "../../images/heroImage.svg";

export const Landingpage = () => {
	return (
		<div>
			<div className='container mx-auto my-2'>
				<div className='cta'>
					<SectionSubHeading text={"Our Mission"} />
					<h1>Organize your Speciality Crop right now !</h1>
					<img src={heroImage} alt='Engaging hero that showcases our Mission for Farmers' />
				</div>
			</div>
		</div>
	);
};
