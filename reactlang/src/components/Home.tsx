import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const language = [
	{
		name: "Japanese",
		code: "ja",
	},
	{
		name: "Hindi",
		code: "hi",
	},
	{
		name: "French",
		code: "fr",
	},

	{
		name: "Spanish",
		code: "es",
	},
];

const Home = () => {
	const navigate = useNavigate();
	const languageSelector = (language: string): void => {
		navigate(`/learn?language=${language}`);
	};
	return (
		<Container maxWidth="sm">
			<Typography variant="h3" p={"2rem"} textAlign={"center"}>
				Welcome, Begin your journer of learning
			</Typography>

			<Stack
				direction={"row"}
				spacing={"2rem"}
				p={"2rem"}
				alignContent={"center"}
				justifyContent={"center"}
			>
				{language.map((language) => (
					<Button
						onClick={() => languageSelector(language.code)}
						key={language.code}
						variant={"contained"}
					>
						{language.name}
					</Button>
				))}
			</Stack>
			<Typography textAlign={"center"}>Choose one language from above</Typography>
		</Container>
	);
};

export default Home;
