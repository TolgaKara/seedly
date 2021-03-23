import React from "react";
import featureOverview from "../../images/featureOverview.svg";

export const FeatureCoreOverview = () => {
	return (
		<div className='flex justify-between items-center'>
			<div>
				<img src={featureOverview} alt='Engaging hero that showcases our Mission for Farmers' />
			</div>
			<div className='w-3/12'>
				<h2 className='mb-4 leading-7 font-semibold text-green-500'>Overview of your garden</h2>
				<p className='mb-8 text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, recusandae tempora.
					Nesciunt alias neque quaerat similique corrupti.
				</p>
			</div>
		</div>
	);
};
