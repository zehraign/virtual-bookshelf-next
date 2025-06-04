import Link from 'next/link';
import { shelves } from '@/lib/data';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Meine Bücherregale</h1>
      <ul className="mt-4 space-y-2">
        {shelves.map((shelf, index) => (
          <li key={index}>
            <strong>{shelf.name}</strong> – {shelf.description}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/shelf/read" className="text-blue-600 hover:underline">
          Gelesene Bücher anzeigen
        </Link>
        <br />
        <Link href="/shelf/create" className="text-blue-600 hover:underline">
          ➕ Neues Regal erstellen
        </Link>
      </div>
    </div>
  );
}