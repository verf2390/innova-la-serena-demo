import WhatsAppButton from "./WhatsAppButton";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Cómo comprar", href: "#como-comprar" },
  { label: "Contacto", href: "#contacto" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="text-base font-bold text-brand-700 md:text-lg">Demo Catálogo</a>
        <nav className="hidden items-center gap-4 text-sm text-zinc-600 md:flex">
          {links.map((link) => (<a key={link.label} href={link.href} className="hover:text-brand-700">{link.label}</a>))}
        </nav>
        <WhatsAppButton message="Hola, vi la demo de catálogo digital para tienda local. Quiero más información.">Consultar por WhatsApp</WhatsAppButton>
      </div>
    </header>
  );
}
