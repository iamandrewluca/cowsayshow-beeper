import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useMemo,
	useState,
} from "react";

type Auth = {
	username: string;
	password: string;
	host: string;
};

type AuthState = {
	auth: Auth | null;
	setAuth: Dispatch<SetStateAction<Auth | null>>;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
	const [auth, setAuth] = useState<Auth | null>(null);
	const value = useMemo(() => ({ auth, setAuth }), [auth]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthState() {
	const value = useContext(AuthContext);
	if (value !== undefined) return value;
	throw new Error("useAuth should be used inside AuthProvider");
}
