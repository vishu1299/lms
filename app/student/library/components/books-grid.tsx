import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBook } from "react-icons/fa";
import {
  LayoutGrid,
  List,
  BookOpen,
  Headphones,
  Bookmark,
  Share2,
} from "lucide-react";

type Book = {
  title: string;
  author: string;
  imageurl: string;
};

const bookDetails: Omit<Book, "imageurl"> = {
  title: "The Art of Programming",
  author: "Robert C. Martin",
};

const images: string[] = [
  "bookone.png",
  "booktwo.png",
  "bookthree.png",
  "bookfour.png",
  "bookfive.png",
  "booksix.png",
];
const books: Book[] = images.map((img) => ({
  ...bookDetails,
  imageurl: `/books/${img}`,
}));

const BooksGrid = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 mb-4">
          <FaBook className="my-auto h-10" />
          <h3 className="text-xl">Available Books</h3>
        </div>

        <div className="flex gap-2">
          <LayoutGrid />
          <List />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white rounded-md shadow p-4">
            {/* <div className=" text-gray-500">
              <Bookmark size={15} />
              <Share2 size={15} />
            </div> */}
            <div className="relative h-64 w-full mb-4 rounded overflow-hidden">
              <Image
                src={book.imageurl}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3>{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <div className="flex text-yellow-500 text-sm">
                {"★".repeat(4)}
                {"☆"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksGrid;
