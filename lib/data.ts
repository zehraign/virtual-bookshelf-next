export interface Shelf {
  name: string;
  description: string;
}

export interface Book {
  title: string;
  author: string;
  rating: number;
}

export const shelves: Shelf[] = [
  { name: "Bookshelf", description: "A shelf full of books" },
];

export const readBooks: Book[] = [
  { title: "The complete Developer", author: "Martin Krause", rating: 5 },
  { title: "Basiswissen Informatik", author: "Eckert Zitzler", rating: 3 },
  { title: "Harry Potter und der Stein der Weisen", author: "J. K. Rowling", rating: 4 },
];