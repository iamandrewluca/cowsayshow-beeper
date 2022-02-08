import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";
import { useAuthState } from "./auth-provider.component";
import { Container } from "./container.component";
import { LoginDialog } from "./login-dialog.component";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { auth, setAuth } = useAuthState();
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

				{!auth && (
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="px-10 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
					>
						Login
					</button>
				)}

				{auth && (
					<span className="text-xs font-medium text-right">
						<div>connected as</div>
						<button
							className="text-base leading-none hover:underline"
							onClick={() => setAuth(null)}
						>
							<span className="text-green-500">{auth.username}</span>
							<span className="text-red-500 pl-1">&times;</span>
						</button>
					</span>
				)}
			</Container>

			<LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		</header>
	);
}
