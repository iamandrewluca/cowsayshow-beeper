import type { NextPage } from "next";
import Head from "next/head";
import useSound from "use-sound";
import { Container } from "../components/container.component";
import { Header } from "../components/header.component";
import { Keyboard } from "../components/keyboard.component";

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

		<Container className="grid gap-8 grid-cols-4 py-8 bg-gray-100 my-8 rounded-3xl shadow">
			{sounds.map((s, index) => (
				<Sound key={index} sound={s} colour={colours[index]} />
			))}
		</Container>

		<Container className="py-8">
			<Keyboard />
		</Container>
	</>
);

export default Home;

const sounds = [
	{ shortcut: "1", file: "badumtss", title: "🥁" },
	{ shortcut: "2", file: "coin", title: "🪙" },
	{ shortcut: "3", file: "applause", title: "👏" },
	{ shortcut: "4", file: "cricket", title: "🦗" },
	{ shortcut: "Q", file: "drumroll", title: "🥁🥁" },
	{ shortcut: "W", file: "gong", title: "📣" },
	{ shortcut: "E", file: "sadtrombone", title: "🎺" },
	{ shortcut: "R", file: "cowsay", title: "🐮" },
	{ shortcut: "A", file: "booing", title: "👻" },
	{ shortcut: "S", file: "cheering", title: "🎉" },
	{ shortcut: "D", file: null, title: "🎁" },
	{ shortcut: "F", file: null, title: "🎁" },
	{ shortcut: "Z", file: null, title: "🎁" },
	{ shortcut: "X", file: null, title: "🎁" },
	{ shortcut: "C", file: null, title: "🎁" },
	{ shortcut: "V", file: null, title: "🎁" },
];

const colours = [
	"bg-red-400",
	"bg-green-400",
	"bg-blue-400",
	"bg-yellow-400",
	"bg-red-400",
	"bg-green-400",
	"bg-blue-400",
	"bg-yellow-400",
	"bg-red-400",
	"bg-green-400",
	"bg-blue-400",
	"bg-yellow-400",
	"bg-red-400",
	"bg-green-400",
	"bg-blue-400",
	"bg-yellow-400",
];

function Sound({ sound, colour }: any) {
	const [play] = useSound(`/sounds/${sound.file}.mp3`);

	return (
		<div
			onClick={() => play()}
			className={`aspect-w-1 aspect-h-1 cursor-pointer rounded-3xl shadow ${colour}`}
		>
			<span className="absolute inset-0 overflow-hidden">
				<div className="absolute m-1 left-0 top-0 rounded-tl-3xl rounded-br-xl font-bold w-9 h-9 bg-gray-200 text-gray-500 shadow-lg flex items-end justify-end font-mono pr-3 pb-1">
					{sound.shortcut}
				</div>
				<div className="absolute bottom-0 right-0 p-6 text-5xl">
					{sound.title}
				</div>
			</span>
		</div>
	);
}
