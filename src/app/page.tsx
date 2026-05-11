"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, type Product, type ProductCategory } from "@/data/products";

type FilterValue = "Todos" | ProductCategory;

const heroBadges = ["Catálogo online", "Consulta por WhatsApp", "Ideal para Instagram", "Vista desde celular"];

const salesBenefits = [
  {
    title: "Menos mensajes repetidos",
    text: "Tus clientas pueden revisar productos antes de escribirte."
  },
  {
    title: "Más orden para vender",
    text: "Todo queda separado por categorías y con información clara."
  },
  {
    title: "Un link para compartir",
    text: "Puedes ponerlo en Instagram, estados de WhatsApp o enviarlo directo."
  },
  {
    title: "Imagen más profesional",
    text: "Tu negocio se ve más confiable y preparado para vender online."
  }
];

function FeaturedCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative h-72 bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100">
        {!imageError ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" onError={() => setImageError(true)} />
        ) : (
          <div className="flex h-full items-end p-5">
            <p className="rounded-xl bg-white/85 px-3 py-2 text-sm font-semibold text-zinc-700">{product.name}</p>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">{product.category}</span>
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{product.name}</h3>
        <p className="text-sm text-zinc-600">{product.description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<FilterValue>("Todos");
  const featuredProducts = useMemo(() => products.filter((p) => p.featured).slice(0, 4), []);
  const filteredProducts = useMemo(
    () => (filter === "Todos" ? products : products.filter((product) => product.category === filter)),
    [filter]
  );

  return (
    <main id="inicio" className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-slate-900">
      <Header />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold leading-tight">Innova La Serena</h1>
          <h2 className="text-xl font-semibold text-zinc-700 md:text-2xl">Tu catálogo digital para mostrar productos y vender más ordenado</h2>
          <p className="text-zinc-600">Una vitrina web simple para que tus clientas revisen productos, vean categorías y consulten directo por WhatsApp sin perderse entre publicaciones de Instagram.</p>
          <div className="flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">{badge}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#productos" className="inline-flex rounded-full border border-brand-500 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">Ver catálogo</a>
            <WhatsAppButton message="Hola, vengo desde el catálogo web de Innova La Serena. Me interesa recibir información general.">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-brand-700">Instagram atrae, la web ordena y vende.</p>
          <p className="mt-2 text-sm text-zinc-600">Comparte un solo link en tu bio, historias o mensajes para que tus clientas naveguen por categorías y te escriban por WhatsApp con un clic.</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {featuredProducts.map((item) => (
              <div key={item.id} className="rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 p-4 text-sm font-medium text-zinc-700">{item.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Cuando todo queda solo en Instagram</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Las publicaciones se pierden con el tiempo</li>
              <li>• Las clientas preguntan lo mismo por chat</li>
              <li>• Es difícil mostrar productos ordenados</li>
              <li>• No siempre se ve disponibilidad o categoría</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Con una vitrina web</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Productos ordenados por categoría</li>
              <li>• Link único para compartir</li>
              <li>• Botón directo a WhatsApp</li>
              <li>• Imagen más profesional para tu negocio</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-4 px-4 pb-14">
        <h2 className="text-2xl font-bold">Productos destacados</h2>
        <p className="text-sm text-zinc-600">Una muestra de cómo podrían verse tus productos destacados en una vitrina online.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProducts.map((product) => <FeaturedCard key={`featured-${product.id}`} product={product} />)}
        </div>
      </section>

      <section id="productos" className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-14">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Catálogo de productos</h2>
          <p className="text-sm text-zinc-600">Filtra por categoría y consulta directo por WhatsApp.</p>
        </div>
        <CategoryFilter active={filter} onChange={setFilter} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold">Cómo te ayuda en ventas</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {salesBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Ejemplo de uso</h2>
          <p className="mt-2 text-sm text-zinc-600">Cuando una clienta pregunta por un producto, en vez de enviar muchas fotos por chat, puedes enviarle el link del catálogo. Ella revisa, elige y te escribe directo por WhatsApp.</p>
          <div className="mt-4 grid gap-3 text-center text-sm font-semibold text-zinc-700 sm:grid-cols-4">
            {['Instagram', 'Catálogo', 'WhatsApp', 'Venta'].map((step) => (
              <div key={step} className="rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50 px-4 py-3">{step}</div>
            ))}
          </div>
        </article>
      </section>

      <section id="como-comprar" className="mx-auto w-full max-w-6xl space-y-4 px-4 pb-14">
        <h2 className="text-2xl font-bold">Cómo comprar</h2>
        <ol className="space-y-3">
          {["Revisa el catálogo", "Elige el producto que te gusta", "Consulta disponibilidad por WhatsApp", "Coordina pago, retiro o entrega"].map((step, idx) => (
            <li key={step} className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white p-4"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">{idx + 1}</span><p>{step}</p></li>
          ))}
        </ol>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-6xl px-4 pb-4">
        <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Redes y contacto</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/innovalaserena918/" target="_blank" rel="noreferrer" className="rounded-full border border-rose-200 px-4 py-2 text-sm hover:border-brand-500 hover:text-brand-700">Instagram</a>
            <a href="https://www.facebook.com/innovaserena?_rdr" target="_blank" rel="noreferrer" className="rounded-full border border-rose-200 px-4 py-2 text-sm hover:border-brand-500 hover:text-brand-700">Facebook</a>
            <WhatsAppButton message="Hola, vengo desde el catálogo web de Innova La Serena. Me interesa recibir asesoría por WhatsApp.">WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-7 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Convierte tus redes en una vitrina más ordenada</h2>
          <p className="mt-2 text-sm text-rose-50">Este catálogo puede adaptarse con tus productos reales, colores, precios, fotos y enlaces. La idea es que tus clientas tengan una experiencia más simple y tú puedas vender con menos desorden por chat.</p>
          <WhatsAppButton className="mt-5 bg-white text-brand-700 hover:bg-rose-50" message="Hola, vengo desde el catálogo web de Innova La Serena. Quiero implementar este catálogo para mi negocio.">Consultar por WhatsApp</WhatsAppButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
