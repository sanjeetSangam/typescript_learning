import { Dispatch, SetStateAction } from "react";

type InputValueType = string | number;

const GenericBox = <T extends InputValueType>({
	label,
	value,
	onChange,
}: {
	label: string;
	value: T;
	onChange: Dispatch<SetStateAction<T>>;
}) => {
	return (
		<div>
			<form>
				<label>{label}</label>
				<input type="text" value={value} onChange={(e) => onChange(e.target.value as T)} />
			</form>
		</div>
	);
};

export default GenericBox;
