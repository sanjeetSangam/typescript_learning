import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, decrement, increment, incrementByValue } from "../redux";

const ToolKit = () => {
	const [val, setVal] = useState<number>(0);

	const dispatch = useDispatch();
	const count = useSelector((state: StateType) => state.count);

	const incrementByValues = () => {
		dispatch(incrementByValue(val));
		setVal(0);
	};

	return (
		<div>
			ToolKit
			<h1>Count = {count}</h1>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				-
			</button>
			<input
				value={val || ""}
				type="number"
				placeholder="number"
				onChange={(e) => setVal(Number(e.target.value))}
			/>
			<button onClick={incrementByValues}>Add</button>
		</div>
	);
};

export default ToolKit;
