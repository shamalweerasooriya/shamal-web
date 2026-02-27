import { Link } from "react-router";
import { Card } from "../ui/Card";

// Update these with your actual books - add images to public/books/
const currentBooks = [
  {
    title: "Legends and Lattes",
    cover:
      "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781035007325.jpg",
  },
  {
    title: "Sapiens",
    cover:
      "https://www.ynharari.com/wp-content/uploads/2017/01/Sapiens-AUS.jpg",
  },
];

// Update these with your actual games - add images to public/games/
const currentGames = [
  {
    title: "The Witcher 3",
    cover:
      "https://m.media-amazon.com/images/I/91RtiJSH+DL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Assassin's Creed Origins",
    cover: "https://m.media-amazon.com/images/I/81h9dbcyCXL._SX425_.jpg",
  },
];

export function CurrentlyUpTo() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
        What I'm up to
      </h2>

      {/* Current Project */}
      <Card>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🧬</span>
            <h3 className="font-medium text-stone-900 dark:text-stone-100">
              Current research
            </h3>
          </div>
          <div className="space-y-2">
            <Link
              to="/projects/genome-assembly-parameters"
              className="text-[#e8614d] font-semibold hover:underline"
            >
              Genome Assembly Parameter Optimization
            </Link>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Systematically exploring Hifiasm parameters for long-read
              sequencing: screening influential parameters, running structured
              experiments, and modeling effects to identify robust assembly
              configurations. Evaluated with QUAST and BUSCO.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-stone-600 dark:text-stone-400 hover:text-[#e8614d] transition-colors"
          >
            See all projects
            <span>→</span>
          </Link>
        </div>
      </Card>

      {/* Currently Reading */}
      <Card>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📖</span>
            <h3 className="font-medium text-stone-900 dark:text-stone-100">
              Currently reading
            </h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {currentBooks.map((book, index) => (
              <div key={index} className="flex-shrink-0 group cursor-pointer">
                <div className="w-24 h-36 sm:w-28 sm:h-40 rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-700 shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 text-center max-w-24 sm:max-w-28 truncate">
                  {book.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Currently Playing */}
      <Card>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎮</span>
            <h3 className="font-medium text-stone-900 dark:text-stone-100">
              Currently playing
            </h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {currentGames.map((game, index) => (
              <div key={index} className="flex-shrink-0 group cursor-pointer">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-700 shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={game.cover}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 text-center max-w-28 sm:max-w-32 truncate">
                  {game.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
