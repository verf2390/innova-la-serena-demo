export default function Footer() {
  return (
    <footer className="mt-16 border-t border-rose-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-zinc-800">Innova La Serena</p>
          <p>Catálogo digital demostrativo</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/innovalaserena918/" target="_blank" rel="noreferrer" className="hover:text-brand-700">Instagram</a>
          <a href="https://www.facebook.com/innovaserena?_rdr" target="_blank" rel="noreferrer" className="hover:text-brand-700">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
