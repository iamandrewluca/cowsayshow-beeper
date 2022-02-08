import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useSound from "use-sound";
import { Container } from "../components/container.component";
import { Header } from "../components/header.component";

const Home: NextPage = () => (
	<>
		<Head>
			<title>Cowsay Show Bepper</title>
			<meta
				name="description"
				content="Remote control for Cowsay Show Bepper"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header />

		<Container className="my-4">
			<div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
				{sounds.map((s, index) => (
					<Sound key={index} sound={s} colour={s.bg} code={s.code} />
				))}
			</div>
		</Container>
	</>
);

export default Home;

const backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`;

function Sound({ sound, colour, code }: any) {
	const [play] = useSound(`/sounds/${sound.file}.mp3`);

	useEffect(() => {
		function listener(event: KeyboardEvent) {
			if (event.code === code) play();
		}

		document.addEventListener("keyup", listener);
		return () => document.removeEventListener("keyup", listener);
	}, [code, play]);

	return (
		<button
			onClick={() => play()}
			style={{ backgroundImage }}
			className={[
				"aspect-square relative shadow rounded-3xl overflow-hidden",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700",
				colour,
			].join(" ")}
		>
			<div
				className={[
					"absolute left-0 top-0 rounded-br-xl font-bold w-9 h-9",
					"bg-gray-200 text-gray-500 shadow-lg flex justify-center items-center",
				].join(" ")}
			>
				{sound.shortcut}
			</div>
			<div className="absolute bottom-1 right-2 text-3xl sm:text-5xl sm:bottom-4 sm:right-5">
				{sound.title}
			</div>
		</button>
	);
}

const sounds = [
	{
		shortcut: "1",
		code: "Digit1",
		bg: "bg-red-400",
		file: "badumtss",
		title: "🥁",
	},
	{
		shortcut: "2",
		code: "Digit2",
		bg: "bg-green-400",
		file: "coin",
		title: "🪙",
	},
	{
		shortcut: "3",
		code: "Digit3",
		bg: "bg-blue-400",
		file: "applause",
		title: "👏",
	},
	{
		shortcut: "4",
		code: "Digit4",
		bg: "bg-yellow-400",
		file: "cricket",
		title: "🦗",
	},
	{
		shortcut: "Q",
		code: "KeyQ",
		bg: "bg-red-400",
		file: "drumroll",
		title: "🥁🥁",
	},
	{
		shortcut: "W",
		code: "KeyW",
		bg: "bg-green-400",
		file: "gong",
		title: "📣",
	},
	{
		shortcut: "E",
		code: "KeyE",
		bg: "bg-blue-400",
		file: "sadtrombone",
		title: "🎺",
	},
	{
		shortcut: "R",
		code: "KeyR",
		bg: "bg-yellow-400",
		file: "cowsay",
		title: "🐮",
	},
	{
		shortcut: "A",
		code: "KeyA",
		bg: "bg-red-400",
		file: "booing",
		title: "👻",
	},
	{
		shortcut: "S",
		code: "KeyS",
		bg: "bg-green-400",
		file: "cheering",
		title: "🎉",
	},
	{
		shortcut: "D",
		code: "KeyD",
		bg: "bg-blue-400",
		file: "cowsay",
		title: "🎁",
	},
	{
		shortcut: "F",
		code: "KeyF",
		bg: "bg-yellow-400",
		file: "cowsay",
		title: "🎁",
	},
	{
		shortcut: "Z",
		code: "KeyZ",
		bg: "bg-red-400",
		file: "cowsay",
		title: "🎁",
	},
	{
		shortcut: "X",
		code: "KeyX",
		bg: "bg-green-400",
		file: "cowsay",
		title: "🎁",
	},
	{
		shortcut: "C",
		code: "KeyC",
		bg: "bg-blue-400",
		file: "cowsay",
		title: "🎁",
	},
	{
		shortcut: "V",
		code: "KeyV",
		bg: "bg-yellow-400",
		file: "cowsay",
		title: "🎁",
	},
];
