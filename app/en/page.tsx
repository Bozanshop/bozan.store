export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to Bozan</h1>
      <p className="text-lg text-gray-600 mb-8">
        Stylová móda pro každou příležitost.
      </p>
      <a
        href="#"
        className="px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
      >
        Zobrazit kolekci
      </a>
    </main>
  );
}