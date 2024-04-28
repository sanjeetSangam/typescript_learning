import { ReactNode } from "react";

type PropsType = {
	heading: string;
	count?: number;
	children: ReactNode;
};

const Box = ({ heading, count = 6, children }: PropsType) => {
	return (
		<div>
			<h1>{heading}</h1>

			{count && <p>{count}</p>}

			{children}
		</div>
	);
};

export default Box;
