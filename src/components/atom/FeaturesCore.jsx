import React from "react";
import { FeatureCoreManaging } from "./FeatureCoreManaging";
import { FeatureCoreOverview } from "./FeatureCoreOverview";

export const FeaturesCore = () => {
	return (
		<div className='mt-20 space-y-32'>
			<FeatureCoreManaging />
			<FeatureCoreOverview />
		</div>
	);
};
