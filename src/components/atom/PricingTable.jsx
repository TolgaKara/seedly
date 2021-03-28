import React from "react";
import PricingStarter from "./PricingStarter";
import { SectionSubHeading } from "./SectionSubHeading";

export const PricingTable = () => {
	return (
		<div>
			<SectionSubHeading text='Find the right Price for the right Farm' />
			<h1 className='text-4xl font-bold text-green-500 mb-4'>Pricing</h1>

			<div class='flex flex-row flex-nowrap'>
				<PricingStarter />
			</div>
		</div>
	);
};
