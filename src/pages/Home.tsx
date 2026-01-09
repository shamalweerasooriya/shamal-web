import { Hero } from "../components/sections/Hero";
import { CurrentlyUpTo } from "../components/sections/CurrentlyUpTo";
import { Contact } from "../components/sections/Contact";

export function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <CurrentlyUpTo />
      <Contact />
    </div>
  );
}
