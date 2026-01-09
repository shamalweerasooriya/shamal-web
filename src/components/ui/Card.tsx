interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-blue-50/70 dark:bg-[#242424] rounded-xl p-6 sm:p-8 shadow-md dark:shadow-lg dark:shadow-black/30 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
