import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tag } from "./Tag";
import blogEx from "../../images/blogEx.svg";
import { SectionSubHeading } from "./SectionSubHeading";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

export const BlogsSlider = () => {
	const [counter, setCounter] = useState(1);

	const next = () => {
		console.log("next");
		setCounter(counter + 1);
	};
	const previous = () => {
		if (counter != 1) {
			console.log("previous");
			setCounter(counter - 1);
		}
	};

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
			<div className='controls px-4 py-2 border border-green-400 border-8 w-32 shadow-md flex flex-row justify-center rounded-md mb-5 text-center'>
				<GrPrevious className='mt-2 cursor-pointer' onClick={previous} />
				<span>{counter}</span>
				<GrNext className='mt-2 cursor-pointer' onClick={next} />
			</div>
		</div>
	);
};
