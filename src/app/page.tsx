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

const benefitCards = [
  "Catálogo ordenado",
  "Consulta rápida por WhatsApp",
  "Productos para regalo y hogar",
  "Atención en La Serena"
];

function FeaturedCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm">
      <div className="relative h-60 bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100">
        {!imageError ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" onError={() => setImageError(true)} />
        ) : (
          <div className="flex h-full items-end p-5">
            <p className="rounded-xl bg-white/85 px-3 py-2 text-sm font-semibold text-zinc-700">{product.name}</p>
          </div>
        )}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-sm font-semibold text-brand-700">{product.category}</p>
        <h3 className="font-semibold">{product.name}</h3>
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
    <main id="inicio" className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <Header />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-700 shadow-sm">Tu vitrina digital de muebles y decoración.</p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900">Innova La Serena</h1>
          <h2 className="text-xl font-semibold text-zinc-700">Muebles, tapizados y detalles para transformar tus espacios</h2>
          <p className="text-zinc-600">Descubre una selección de productos para tu hogar y consulta directamente por WhatsApp.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#productos" className="inline-flex rounded-full border border-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">Ver productos</a>
            <WhatsAppButton message="Hola, vengo desde el catálogo web de Innova La Serena. Quiero consultar por productos.">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.map((item) => (
              <div key={item.id} className="rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 p-4 text-sm font-medium text-zinc-700">{item.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-4">
          {benefitCards.map((benefit) => (
            <article key={benefit} className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-zinc-800">{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-5 px-4 pb-14">
        <h2 className="text-2xl font-bold">Productos destacados</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProducts.map((product) => <FeaturedCard key={`featured-${product.id}`} product={product} />)}
        </div>
      </section>

      <section id="productos" className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-14">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Productos</h2>
          <p className="text-sm text-zinc-600">Filtra por categoría y consulta directo por WhatsApp.</p>
        </div>
        <CategoryFilter active={filter} onChange={setFilter} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
      </section>

      <section id="como-comprar" className="mx-auto w-full max-w-6xl space-y-4 px-4 pb-14">
        <h2 className="text-2xl font-bold">Cómo comprar</h2>
        <ol className="space-y-3">
          {["Revisa el catálogo", "Consulta por WhatsApp", "Coordina disponibilidad, pago y entrega", "Recibe o retira tu producto"].map((step, idx) => (
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
            <WhatsAppButton message="Hola, vengo desde el catálogo web de Innova La Serena. Quiero información por WhatsApp.">WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
