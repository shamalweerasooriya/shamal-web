import { Card } from "../ui/Card";

export function Hero() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8">
        {/* Avatar - shows first on mobile */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-lg overflow-hidden bg-[#3b9c5c] flex-shrink-0 order-first md:order-last mx-auto md:mx-0 shadow-lg shadow-black/30 transition-transform duration-300 hover:rotate-3 hover:scale-105">
          <img
            src="/profile.jpg"
            alt="Shamal Weerasooriya"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl">
            Hi, I'm <span className="font-bold">Shamal.</span>
          </h1>

          <div className="space-y-1 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            <p>💻 Software Engineer at Pagero</p>
            <p>🎓 Computer Engineering @ University of Peradeniya</p>
            <p>
              🧬 Research interests: Computational Biology, Computer Security
            </p>
            <p>🌿 UI development enthusiast</p>
          </div>

          <div className="space-y-1 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
            <p>
              🏉 Rugby | ⚽ Football | 🏎️ F1 | 📚 Reader | 🎬 Movies & TV shows
            </p>
            <p>✍️ Occasional blogger</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
