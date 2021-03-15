import React from "react";

export const Button = (props) => {
	const buttonTypes = {
		action: "bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-lg",
	};
	const buttonType = buttonTypes[props.type];
	return <button className={buttonType}>{props.text}</button>;
};
