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

    <Container className="py-10 flex flex-wrap justify-center gap-20">
      {sounds.map((s) => (
        <Sound key={s} name={s} />
      ))}
    </Container>

    <Container className="py-10">
      <Keyboard />
    </Container>
  </>
);

export default Home;

const sounds = [
  "badumtss",
  "coin",
  "applause",
  "cricket",
  "drumroll",
  "gong",
  "sadtrombone",
  "cowsay",
  "booing",
  "cheering",
];

function Sound({ name }: any) {
  const [play] = useSound(`/sounds/${name}.mp3`);

  return (
    <div
      onClick={() => play()}
      className="bg-red-100 w-36 h-36 rounded-3xl items-center justify-center cursor-pointer shadow-2xl flex hover:bg-blue-100"
    >
      {name}
    </div>
  );
}
