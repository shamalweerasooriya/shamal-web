interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[#242424] rounded-xl p-6 sm:p-8 shadow-lg shadow-black/30 ${className}`}
    >
      {children}
    </div>
  );
}
