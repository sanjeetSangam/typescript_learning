// import Box from "./components/Box";
// import GenericBox from "./components/GenericBox";
// import ReducerBox from "./components/ReducerBox";
// import ContextBox from "./components/ContextBox";
// import { FormEvent, useState } from "react";

import ToolKit from "./components/ToolKit";

// interface Person {
// 	name: string;
// 	age: number;
// }

function App() {
	// const [user, setUser] = useState<Person>();
	// const submitHandler = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log("Submit", user);
	// };
	return (
		<>
			<div>
				<ToolKit />
				{/* <ReducerBox /> */}
				{/* <ContextBox /> */}
				{/* <form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Name"
						value={user?.name || ""}
						onChange={(e) => setUser((prev) => ({ ...prev!, name: e.target.value }))}
					/>
					<input
						type="number"
						placeholder="Age"
						value={user?.age || ""}
						onChange={(e) =>
							setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
						}
					/>

					<button type="submit">Submit</button>
				</form> */}

				{/* <Box heading="Title">{"this is the title and the title will be displayed"}</Box> */}
				{/* <GenericBox label="Label" value={value} onChange={setvalue} /> */}
			</div>
		</>
	);
}

export default App;
