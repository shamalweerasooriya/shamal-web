import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 border-b border-stone-800">
      <Link to="/" className="font-semibold text-base sm:text-lg">
        <span className="hidden sm:inline">Shamal Weerasooriya</span>
        <span className="sm:hidden">Shamal W.</span>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <a
          href="https://github.com/shamalweerasooriya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-stone-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-xs sm:text-sm text-stone-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
