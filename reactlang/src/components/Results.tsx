import { Button, Container, List, ListItem, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../redux/slices";
import { useNavigate } from "react-router-dom";
import { matchingElements } from "../utils/features";

const Results = () => {
	const { words, result } = useSelector((state: { root: StateType }) => state.root);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const correctAnswer = matchingElements(
		words.map((item) => item.meaning),
		result
	);
	const percentage = (correctAnswer / words.length) * 100;

	const resetHandler = (): void => {
		dispatch(clearState());
		navigate("/");
	};

	return (
		<Container maxWidth={"sm"}>
			<Typography variant="h3" color={"primary"} m={"2rem 0"}>
				Result
			</Typography>

			<Typography m={"1rem"} variant="h6">
				You got {correctAnswer} right of the {words.length}
			</Typography>

			<Stack direction={"row"} justifyContent={"space-evenly"}>
				<Stack>
					<Typography m={"1rem 0"} variant="h5">
						Your Answer
					</Typography>

					<List>
						{result.map((item, index) => (
							<ListItem key={index}>
								{index + 1} - {item}
							</ListItem>
						))}
					</List>
				</Stack>

				<Stack>
					<Typography m={"1rem 0"} variant="h5">
						Correct Answer
					</Typography>

					<List>
						{words.map((item, index) => (
							<ListItem key={index}>
								{index + 1} - {item.meaning}
							</ListItem>
						))}
					</List>
				</Stack>
			</Stack>

			<Typography m={"1rem"} variant="h5" color={percentage > 50 ? "green" : "red"}>
				{percentage > 50 ? "Pass" : "Fail"}
			</Typography>

			<Button onClick={resetHandler} sx={{ margin: "1rem" }} variant="contained">
				Reset
			</Button>
		</Container>
	);
};

export default Results;
