import mqtt from "mqtt";
import { Dialog, Transition } from "@headlessui/react";
import { FormEventHandler, Fragment } from "react";
import { useAuthState } from "./auth-provider.component";

export function LoginDialog({ isOpen, setIsOpen }: any) {
	const { setAuth } = useAuthState();

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const data = new FormData(form);
		const username = data.get("username");
		const password = data.get("password");
		const host = data.get("host");

		if (!username || !password || !host) return;

		setIsOpen(false);
		setAuth({
			username: username.toString(),
			password: password.toString(),
			host: host.toString(),
		});

		return; // To be continued ...

		const client = mqtt.connect("host", {
			username: "username",
			password: "password",
		});
		client.end();
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={() => setIsOpen(false)}
			>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<form
							onSubmit={onSubmit}
							className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
						>
							<Dialog.Title
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Login
							</Dialog.Title>

							<label className="mt-2 block">
								Username:
								<input
									type="text"
									name="username"
									defaultValue={process.env.NEXT_PUBLIC_MQTT_USER}
									required
									placeholder="johndoe"
									className="rounded w-full"
								/>
							</label>

							<label className="mt-2 block">
								Password:
								<input
									type="password"
									name="password"
									defaultValue={process.env.NEXT_PUBLIC_MQTT_PASS}
									required
									placeholder="johndoe secret"
									className="rounded w-full"
								/>
							</label>

							<label className="mt-2 block">
								Host:
								<input
									type="text"
									name="host"
									defaultValue={process.env.NEXT_PUBLIC_MQTT_HOST}
									required
									placeholder="mqtt://example.com:1883"
									className="rounded w-full"
								/>
							</label>

							<button
								type="submit"
								className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
							>
								Connect
							</button>
						</form>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
