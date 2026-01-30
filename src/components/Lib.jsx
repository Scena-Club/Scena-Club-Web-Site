import books from "./Books.jsx";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import { useState, useMemo } from "react";

export const Lib = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);

  // Extraire toutes les catégories uniques des livres
  const allCategories = useMemo(() => {
    const categoriesSet = new Set();
    books.forEach((book) => {
      book.category.forEach((cat) => categoriesSet.add(cat));
    });
    return Array.from(categoriesSet).sort();
  }, []);

  // Filtrer les livres selon les critères
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      // Filtre par recherche textuelle
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.some((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      // Filtre par catégorie
      const matchesCategory =
        selectedCategory === "all" || book.category.includes(selectedCategory);

      // Filtre par recommandation
      const matchesRecommended = !showRecommendedOnly || book.recommended;

      return matchesSearch && matchesCategory && matchesRecommended;
    });
  }, [searchTerm, selectedCategory, showRecommendedOnly]);

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setShowRecommendedOnly(false);
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="lib">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          La <span className="text-primary">Bibliothèque </span>du Scena
        </h2>

        {/* Zone de filtres */}
        <div className="mb-8 space-y-4">
          {/* Barre de recherche */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Rechercher un livre par titre ou catégorie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-2xl px-4 py-2 rounded-lg border border-foreground focus:outline-none focus:border-primary shadow-sm"
            />
          </div>

          {/* Filtres par catégorie et recommandation */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {/* Bouton Tous */}
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-primary/20 border border-foreground/20"
              }`}
            >
              Tous les livres
            </button>

            {/* Bouton Recommandés */}
            <button
              onClick={() => setShowRecommendedOnly(!showRecommendedOnly)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                showRecommendedOnly
                  ? "bg-gradient-to-r from-purple-500 to-yellow-500 text-white shadow-md"
                  : "bg-card hover:bg-primary/20 border border-foreground/20"
              }`}
            >
              <StarIcon size={16} />
              Recommandés
            </button>

            {/* Séparateur visuel */}
            <div className="h-8 w-px bg-foreground/20"></div>

            {/* Boutons de catégories */}
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card hover:bg-primary/20 border border-foreground/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Compteur de résultats */}
          <div className="text-center text-sm text-foreground/70">
            {filteredBooks.length} livre{filteredBooks.length > 1 ? "s" : ""}{" "}
            trouvé{filteredBooks.length > 1 ? "s" : ""}
          </div>
        </div>

        {/* Grille de livres */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          key={searchTerm + selectedCategory + showRecommendedOnly}
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-md mb-3"
                  />
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg mb-3 ${
                      book.recommended
                        ? "bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {book.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {book.category.map((cat, index) => (
                      <span
                        key={index}
                        className="text-xs text-secondary-foreground bg-primary/20 font-medium px-2 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3 items-center">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                          Recommandé
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Message si aucun livre trouvé */}
          {filteredBooks.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-primary text-lg mb-2">
                Aucun livre trouvé pour ces critères.
              </p>
              <button
                onClick={resetFilters}
                className="text-foreground/70 hover:text-primary underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
