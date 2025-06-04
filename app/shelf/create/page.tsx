'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateShelfPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await fetch('/api/shelf/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });
    router.push('/');
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Regal erstellen</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <label className="block">
          Regalname:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block">
          Beschreibung:
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Erstellen
        </button>
      </form>
    </main>
  );
}