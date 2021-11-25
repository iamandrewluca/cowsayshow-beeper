export function Container({ children, className }: any) {
  return (
    <div className={`container mx-auto px-8 max-w-4xl ${className}`}>
      {children}
    </div>
  );
}
