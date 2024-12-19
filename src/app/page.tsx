export default function Home() {
  return (
    <div className="grid grid-cols-10 grid-rows-[auto_1fr_auto] gap-4 min-h-screen bg-gray-900 p-4 md:p-20">
      {/* Header */}
      <header className="col-span-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center p-6 rounded">
        <h1 className="text-xl font-bold">Header</h1>
      </header>

      {/* Sidebar */}
      <aside className="col-span-10 md:col-span-2 bg-gradient-to-b from-teal-500 to-cyan-600 text-white text-center p-6 rounded row-span-2">
        <h2 className="text-lg font-semibold">Sidebar</h2>
      </aside>

      {/* Content-1 */}
      <section className="col-span-10 md:col-span-8 bg-gradient-to-r from-blue-400 to-blue-700 text-white text-center p-6 rounded">
        <h2 className="text-lg font-semibold">Content-1</h2>
      </section>

      {/* Content-2 */}
      <section className="col-span-10 md:col-span-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center p-6 rounded h-[200px] md:h-[200px]">
        <h2 className="text-lg font-semibold">Content-2</h2>
      </section>

      {/* Content-3 */}
      <section className="col-span-10 md:col-span-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center p-6 rounded h-[200px] md:h-[200px]">
        <h2 className="text-lg font-semibold">Content-3</h2>
      </section>

      {/* Footer */}
      <footer className="col-span-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center p-6 rounded">
        <h2 className="text-xl font-bold">Footer</h2>
      </footer>
    </div>
  );
}
