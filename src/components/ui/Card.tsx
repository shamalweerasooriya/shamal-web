interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-(--bg-card) rounded-xl p-6 sm:p-8 shadow-(--shadow) transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
