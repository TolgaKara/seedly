import React from "react";

export const Tag = ({ text }) => {
	const tagStylesObj = {
		Programming: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
		Marketing: "bg-blue-400",
	};

	return (
		<p
			className={`px-2 py-1 text-xs inline-block text-center font-bold uppercase rounded-full text-white ${tagStylesObj[text]}`}
		>
			{text}
		</p>
	);
};
