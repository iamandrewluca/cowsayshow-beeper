export function Container({ children, className }: any) {
	return (
		<div className={`container mx-auto px-4 max-w-2xl ${className}`}>
			{children}
		</div>
	);
}
