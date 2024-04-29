import axios from "axios";

import { generate } from "random-words";
import _ from "lodash";

export const translateWords = async (lang: LangType): Promise<WordType[]> => {
	try {
		const words: { Text: string } = generate(8).map((word) => ({ Text: word }));

		const response = await axios.post(
			"https://microsoft-translator-text.p.rapidapi.com/translate",
			words,
			{
				params: {
					"to[0]": lang,
					"api-version": "3.0",
					profanityAction: "NoAction",
					textType: "plain",
				},
				headers: {
					"content-type": "application/json",
					"X-RapidAPI-Key": import.meta.env.VITE_API_KEY_RAPID,
					"X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
				},
			}
		);

		const recieve: FetchedDataType[] = response.data;

		const arr: WordType[] = recieve.map((item, index) => {
			const word = item.translations[0].text;
			const options: string[] = generateMCQs(words, index);
			return {
				word,
				meaning: words[index].Text,
				options: options,
			};
		});

		return arr;
	} catch (error) {
		console.log(error);
		throw new Error("Some Error occured");
	}
};

const generateMCQs = (meanings: { Text: string }[], index: number): string[] => {
	const correctAnswer: string = meanings[index].Text;

	const allMeaningsExceptCorrectAnswer = meanings.filter((anwer) => anwer.Text !== correctAnswer);

	const incorrectAnswers: string = _.sampleSize(allMeaningsExceptCorrectAnswer, 3).map(
		(i) => i.Text
	);

	const mcqOptions = _.shuffle([correctAnswer, ...incorrectAnswers]);
	return mcqOptions;
};

export const matchingElements = (arr1: string[], arr2: string[]): number => {
	if (arr1.length !== arr2.length) {
		throw new Error("arrays are not equal");
	}

	let matchingCount = 0;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) matchingCount++;
	}

	return matchingCount;
};

export const fetchAudio = async (text: string, lang: LangType): Promise<string> => {
	const encodedParams = new URLSearchParams({
		src: text,
		r: "0",
		c: "mp3",
		f: "8khz_8bit_mono",
		b64: "true",
	});

	if (lang === "ja") {
		encodedParams.set("hl", "ja-jp");
	} else if (lang === "es") {
		encodedParams.set("hl", "es-es");
	} else if (lang === "fr") {
		encodedParams.set("hl", "fr-fr");
	} else {
		encodedParams.set("hl", "hi-in");
	}

	const { data }: { data: string } = await axios.post(
		"https://voicerss-text-to-speech.p.rapidapi.com/",
		encodedParams,
		{
			params: { key: import.meta.env.VITE_API_KEY_VOICE },
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"X-RapidAPI-Key": import.meta.env.VITE_API_KEY_RAPID,
				"X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
			},
		}
	);

	return data;
};
