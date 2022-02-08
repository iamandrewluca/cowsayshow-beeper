import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";
import { Container } from "./container.component";
import { LoginDialog } from "./login-dialog.component";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [play] = useSound("/sounds/cow.mp3", {
		interrupt: true,
		sprite: { cow: [0, 4000] },
	});

	return (
		<header className="py-2 bg-white shadow-lg">
			<Container className="flex justify-between items-center">
				<div
					onClick={() => play({ id: "cow" })}
					className="text-6xl transform -rotate-6 hover:rotate-6"
				>
					<Link href="/">🐮</Link>
				</div>

				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="px-10 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Login
				</button>
			</Container>

			<LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	);
}
