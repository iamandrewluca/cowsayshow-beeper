import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useSound from "use-sound";
import { AuthProvider } from "../components/auth-provider.component";
import { Container } from "../components/container.component";
import { Header } from "../components/header.component";

const Home: NextPage = () => (
	<AuthProvider>
		<Head>
			<title>Cowsay Show Bepper</title>
			<meta
				name="description"
				content="Remote control for Cowsay Show Bepper"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header />

		<Container className="text-right">
			<a
				href="https://github.com/iamandrewluca/cowsayshow-beeper"
				className="py-2 text-xs underline inline-block"
				target="_blank"
				rel="noreferrer"
			>
				<span>Made with</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 inline text-red-600 mx-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
						clipRule="evenodd"
					/>
				</svg>
				<span>by community</span>
			</a>
		</Container>

		<Container className="mb-4">
			<div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
				{sounds.map((s, index) => (
					<Sound key={index} sound={s} colour={s.bg} code={s.code} />
				))}
			</div>
		</Container>
	</AuthProvider>
);

export default Home;

const backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`;

function Sound({ sound, colour, code }: any) {
	const [play] = useSound(sound.file);

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
		file: "/sounds/badumtss.mp3",
		title: "🥁",
	},
	{
		shortcut: "2",
		code: "Digit2",
		bg: "bg-green-400",
		file: "/sounds/coin.mp3",
		title: "🪙",
	},
	{
		shortcut: "3",
		code: "Digit3",
		bg: "bg-blue-400",
		file: "/sounds/applause.mp3",
		title: "👏",
	},
	{
		shortcut: "4",
		code: "Digit4",
		bg: "bg-yellow-400",
		file: "/sounds/cricket.mp3",
		title: "🦗",
	},
	{
		shortcut: "Q",
		code: "KeyQ",
		bg: "bg-red-400",
		file: "/sounds/drumroll.mp3",
		title: "🥁🥁",
	},
	{
		shortcut: "W",
		code: "KeyW",
		bg: "bg-green-400",
		file: "/sounds/gong.mp3",
		title: "📣",
	},
	{
		shortcut: "E",
		code: "KeyE",
		bg: "bg-blue-400",
		file: "/sounds/sadtrombone.mp3",
		title: "🎺",
	},
	{
		shortcut: "R",
		code: "KeyR",
		bg: "bg-yellow-400",
		file: "/sounds/cowsay.mp3",
		title: "🐮",
	},
	{
		shortcut: "A",
		code: "KeyA",
		bg: "bg-red-400",
		file: "/sounds/booing.mp3",
		title: "👻",
	},
	{
		shortcut: "S",
		code: "KeyS",
		bg: "bg-green-400",
		file: "/sounds/cheering.mp3",
		title: "🎉",
	},
	{
		shortcut: "D",
		code: "KeyD",
		bg: "bg-blue-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
	{
		shortcut: "F",
		code: "KeyF",
		bg: "bg-yellow-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
	{
		shortcut: "Z",
		code: "KeyZ",
		bg: "bg-red-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
	{
		shortcut: "X",
		code: "KeyX",
		bg: "bg-green-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
	{
		shortcut: "C",
		code: "KeyC",
		bg: "bg-blue-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
	{
		shortcut: "V",
		code: "KeyV",
		bg: "bg-yellow-400",
		file: "/sounds/cowsay.mp3",
		title: "🎁",
	},
];
