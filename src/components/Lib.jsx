import books from "./Books.jsx";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import { useState } from "react";

export const Lib = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="homer">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          La <span className="text-primary">Bibliothèque </span>du Scena
        </h2>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher un livre par titre ou catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-foreground focus:outline-none focus:border-primary shadow-sm"
          />
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          key={searchTerm}
        >
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={`bg-card p-6 rounded-lg shadow-xs card-hover relative ${
                book.recommended
                  ? "p-[3px] bg-gradient-to-r from-purple-500 to-yellow-500"
                  : ""
              }`}
            >
              {/* Contenu de la carte avec fond normal */}
              <div
                className={`bg-card rounded-lg h-full ${book.recommended ? "p-5" : ""}`}
              >
                <div>
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      book.recommended
                        ? "bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {book.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.category.map((cat, index) => (
                      <span
                        key={index}
                        className="text-secondary-foreground bg-primary/20 font-medium px-2 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <a
                      href={book.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    {book.recommended && (
                      <>
                        <div className="flex items-center">
                          <svg width="0" height="0">
                            <linearGradient
                              id="gradient-star"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#eab308" />
                            </linearGradient>
                          </svg>
                          <StarIcon
                            size={20}
                            style={{ stroke: "url(#gradient-star)" }}
                          />
                        </div>
                        <p className="bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent text-sm">
                          Recommended
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredBooks.length === 0 && (
            <p className="text-center text-primary col-span-full">
              Aucun livre trouvé pour cette recherche.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
