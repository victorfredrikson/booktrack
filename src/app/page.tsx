"use client";
import React, { useState } from "react";
import Search from "./components/Search";
import { searchBooks, Book } from "./lib/googleBooks";
import Image from "next/image";
export default function Home() {
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async (value: string) => {
    setLoading(true);
    const books = await searchBooks(value);
    setResults(books);
    setLoading(false);
  };
  return (
    <main className="flex min-h-screen w-full flex-col items-start justify-between py-32 px-16 bg-red-500 dark:bg-black sm:items-center">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          BookTrack
        </h1>
        <Search onSearch={handleSearch} />
        {loading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}
        <ul className="mt-2 space-y-2">
          {results.map((book) => (
            <li key={book.id} className="flex items-center space-x-2">
              {book.thumbnail && (
                <div className="w-12 h-16 relative flex-shrink-0">
                  <Image
                    src={book.thumbnail}
                    alt={book.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-gray-600">
                  {book.authors.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
