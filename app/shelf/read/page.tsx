'use client';

import { useState } from 'react';
import { readBooks } from '@/lib/data';

export default function ShelfReadPage() {
  const [books] = useState(readBooks);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch('/api/shelf/read/add', {
      method: 'POST',
      body: formData,
    });
    location.reload(); 
  }

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Gelesene Bücher</h2>
      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input type="text" name="title" placeholder="Buchtitel" required className="border p-1" />
        <input type="text" name="author" placeholder="Autor" required className="border p-1" />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Hinzufügen</button>
      </form>
      <ul>
        {books.map((book, idx) => (
          <li key={idx} className="mb-2">
            <strong>{book.title}</strong> von {book.author}<br />
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} style={{ color: n <= book.rating ? 'gold' : 'lightgray' }}>★</span>
            ))}
          </li>
        ))}
      </ul>
    </main>
  );
}