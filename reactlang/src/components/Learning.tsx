import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchAudio, translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getWordsFail, getWordsRequest, getWordsSuccess } from "../redux/slices";
import Loader from "./Loader";

const Learning = () => {
	const audioRef = useRef(null);
	const [count, setCount] = useState<number>(0);
	const [audioSrc, setAudioSrc] = useState<string>("");
	const params = useSearchParams()[0].get("language") as LangType;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { words, loading, error } = useSelector((state: { root: StateType }) => state.root);

	const audioHandler = async () => {
		const player: HTMLAudioElement = audioRef?.current;
		if (player) {
			player.play();
			return;
		}

		const data = await fetchAudio(words[count]?.word, params);
		setAudioSrc(data);
	};

	const nextHandler = (): void => {
		setCount((prev) => prev + 1);
		setAudioSrc("");
	};

	useEffect(() => {
		dispatch(getWordsRequest());
		translateWords(params || "hi")
			.then((res) => dispatch(getWordsSuccess(res)))
			.catch((err) => dispatch(getWordsFail(err)));

		if (error) {
			alert(error);
			dispatch(clearState());
		}
	}, []);

	if (loading) return <Loader />;

	return (
		<Container maxWidth="sm" sx={{ padding: "1rem" }}>
			{audioSrc && <audio src={audioSrc} autoPlay ref={audioRef}></audio>}

			<Button
				onClick={() => {
					if (count === 0) {
						navigate("/");
					} else {
						setCount((prev) => prev - 1);
					}
				}}
			>
				<ArrowBack />
			</Button>

			<Typography m={"2rem 0"}>Learning Mode Easy</Typography>

			<Stack direction={"row"} spacing={"1rem"}>
				<Typography variant="h4">
					{count + 1} - {words[count]?.word}
				</Typography>

				<Typography color={"blue"} variant="h4">
					: {words[count]?.meaning}
				</Typography>

				<Button
					sx={{
						borderRadius: "50%",
					}}
					onClick={audioHandler}
				>
					<VolumeUp />
				</Button>
			</Stack>

			<Button
				sx={{
					margin: "3rem 0",
				}}
				variant="contained"
				fullWidth
				onClick={() => {
					if (count === words.length - 1) {
						navigate("/quiz");
					} else {
						nextHandler();
					}
				}}
			>
				{count === words.length - 1 ? "Text" : "Next"}
			</Button>
		</Container>
	);
};

export default Learning;
