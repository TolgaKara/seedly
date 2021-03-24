import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "./Tag";
import blogEx from "../../images/blogEx.svg";
import { SectionSubHeading } from "./SectionSubHeading";

export const BlogsSlider = () => {
	return (
		<div>
			<SectionSubHeading text='Read More interesting articles' />
			<h1 className='text-4xl font-bold text-green-500 mb-4'>Blog</h1>
			<div className='cards flex flex-row mb-5'>
				<div className='card justify-center p-10 bg-white border rounded  shadow-lg'>
					<Link to='/blog/1'>
						<img className='w-32' src={blogEx} alt='' />
						<p className='text-center'>Blog title</p>

						<div className='flex flex-col space-y-3 mt-3'>
							<small className='text-xs font-light text-center'>24.03.2021</small>
							<Tag text='Marketing' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
