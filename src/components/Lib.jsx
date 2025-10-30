import books from "./Books.jsx";
import { ExternalLinkIcon } from "lucide-react";

export const Lib = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          La <span className="text-primary">Bibliothèque </span>du Scena
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div>
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{book.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.category.map((cat) => (
                    <span className="text-secondary-foreground bg-primary/20 font-medium px-2 py-1 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={book.link}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLinkIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
