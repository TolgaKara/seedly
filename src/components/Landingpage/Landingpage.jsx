import React from "react";
import { SectionSubHeading } from "../atom/SectionSubHeading";
import { Button } from "../atom/Button";
import { Features } from "../atom/Features";
import { Hero } from "../atom/Hero";

export const Landingpage = () => {
	return (
		<div className=''>
			<div className='container mx-auto mt-16 '>
				<Hero />
				<Features />
			</div>
		</div>
	);
};
