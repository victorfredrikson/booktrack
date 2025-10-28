export interface Book {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
}

export async function searchBooks(query: string): Promise<Book[]> {
  if (!query) return [];
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&maxResults=10&key=${apiKey}`
  );
  const data = await response.json();
  if (!data.items) return [];

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors || [],
    thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
  }));
}
