import React from "react";
import { Button } from "./Button";

export const PricingBusiness = () => {
	return (
		<div class='w-5/12 text-center shadow-lg p-5 '>
			<p class='text-6xl mb-5'>💼</p>
			<p class='text-3xl font-semibold'>5.99 € / month</p>
			<h3 class='text-green-500 font-bold text-lg uppercase border-b-4 border-green-500'>
				Business
			</h3>
			<ul class='list-none space-y-4 mt-4'>
				<li class='font-medium text-base'>Lorem ipsum dolor sit amet</li>
				<li class='font-medium text-base'>Lorem ipsum dolor sit amet</li>
				<li class='font-medium text-base'>Lorem ipsum dolor sit amet</li>
				<li class='font-medium text-base'>Lorem ipsum dolor sit amet</li>
			</ul>
			<Button type='action' text='Purchase' />
		</div>
	);
};
