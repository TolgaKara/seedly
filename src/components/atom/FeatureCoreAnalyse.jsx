import React from "react";
import featureAnalyse from "../../images/featureAnalyse.svg";

export const FeatureCoreAnalyse = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='w-3/12'>
				<h2 className='mb-4 leading-7 font-semibold text-green-500'>
					Automatically Analysation to help you grow
				</h2>
				<p className='mb-8 text-lg leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, recusandae tempora.
					Nesciunt alias neque quaerat similique corrupti.
				</p>
			</div>
			<div>
				<img src={featureAnalyse} alt='Engaging hero that showcases our Mission for Farmers' />
			</div>
		</div>
	);
};
