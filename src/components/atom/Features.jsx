import React from "react";
import { FeaturesCore } from "./FeaturesCore";
import { FeaturesGeneral } from "./FeaturesGeneral";
import { SectionSubHeading } from "./SectionSubHeading";

export const Features = () => {
	return (
		<div className='features mt-40 mb-20 flex-wrap'>
			<SectionSubHeading text='More then just Farming' />
			<h1 className='text-4xl font-bold text-green-500'>Features</h1>
			<FeaturesGeneral />
			<FeaturesCore />
		</div>
	);
};
