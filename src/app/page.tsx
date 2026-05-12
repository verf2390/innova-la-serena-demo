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

const highlights = ["Catálogo visual", "Productos por categoría", "Consulta directa", "Link para Instagram"];

function HeroImage({ product, className = "", priority = false }: { product: Product; className?: string; priority?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-100 to-pink-50 shadow-soft ${className}`}>
      {!imageError ? (
        <Image src={product.image} alt={product.name} fill className="object-cover" priority={priority} onError={() => setImageError(true)} />
      ) : (
        <div className="flex h-full items-end p-4 text-sm font-semibold text-brand-700">{product.name}</div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-white">
        <p className="text-xs font-medium opacity-90">{product.category}</p>
        <p className="font-semibold">{product.name}</p>
      </div>
    </div>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-72 bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100">
        {!imageError ? (
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" onError={() => setImageError(true)} />
        ) : (
          <div className="flex h-full items-end p-5">
            <p className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-700">{product.name}</p>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">{product.category}</span>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <h3 className="font-bold text-zinc-900">{product.name}</h3>
          <p className="text-sm font-semibold text-brand-700">{product.priceLabel}</p>
        </div>
        <WhatsAppButton message={`Hola, vi la demo de catálogo digital. Me interesa consultar por: ${product.name}`} className="px-4 py-2 text-xs">
          Consultar
        </WhatsAppButton>
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
  const heroProduct = featuredProducts[0];

  return (
    <main id="inicio" className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <Header />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-12">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-700 shadow-sm">Instagram atrae. La web ordena y vende.</p>
          <div className="space-y-3">
            <h1 className="text-4xl font-black leading-tight text-zinc-900 md:text-5xl">Catálogo Digital para Tienda Local</h1>
            <h2 className="text-xl font-semibold text-zinc-700">Una vitrina simple para mostrar productos y recibir consultas por WhatsApp</h2>
            <p className="max-w-xl text-zinc-600">Ordena tus productos por categorías, comparte un solo link y permite que tus clientes consulten rápido desde el celular.</p>
          </div>

          {heroProduct && (
            <HeroImage
              product={heroProduct}
              priority
              className="h-52 border border-white/80 md:hidden"
            />
          )}

          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">{item}</span>
            ))}
          </div>

          <div className="grid gap-3 sm:flex">
            <a href="#productos" className="inline-flex items-center justify-center rounded-full border border-brand-500 px-6 py-3 text-base font-bold text-brand-700 transition hover:bg-brand-50">Ver catálogo</a>
            <WhatsAppButton message="Hola, vi la demo de catálogo digital para tienda local. Quiero más información." className="py-3 text-base">
              Cotizar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <div className="hidden h-[560px] grid-cols-2 grid-rows-2 gap-3 md:grid">
          {featuredProducts[0] && <HeroImage product={featuredProducts[0]} priority className="col-span-2 row-span-1" />}
          {featuredProducts.slice(1, 3).map((product) => (
            <HeroImage key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map((benefit) => (
            <article key={benefit} className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-zinc-800">{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-5 px-4 pb-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-700">Muestra visual</p>
            <h2 className="text-2xl font-black text-zinc-900">Productos destacados</h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600">Fotos grandes primero, información clara y botón directo para consultar.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProducts.map((product) => <FeaturedCard key={`featured-${product.id}`} product={product} />)}
        </div>
      </section>

      <section id="productos" className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-14">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-brand-700">Catálogo</p>
          <h2 className="text-2xl font-black text-zinc-900">Elige una categoría</h2>
          <p className="text-sm text-zinc-600">Menos texto, más producto y consultas rápidas por WhatsApp.</p>
        </div>
        <CategoryFilter active={filter} onChange={setFilter} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
      </section>

      <section id="como-comprar" className="mx-auto w-full max-w-6xl space-y-4 px-4 pb-14">
        <h2 className="text-2xl font-black text-zinc-900">Cómo comprar</h2>
        <ol className="grid gap-3 md:grid-cols-4">
          {["Revisa", "Elige", "Consulta", "Coordina"].map((step, idx) => (
            <li key={step} className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{idx + 1}</span>
              <p className="font-bold text-zinc-900">{step}</p>
              <p className="mt-1 text-sm text-zinc-600">{["Mira el catálogo", "Escoge un producto", "Escribe por WhatsApp", "Pago, retiro o entrega"][idx]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-6xl px-4 pb-4">
        <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-sm font-semibold text-brand-700">Contacto directo</p>
            <h2 className="text-2xl font-black text-zinc-900">Comparte un solo link y recibe consultas</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <a href="#" aria-label="Instagram (demo)" className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold hover:border-brand-500 hover:text-brand-700">Instagram</a>
            <a href="#" aria-label="Facebook (demo)" className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold hover:border-brand-500 hover:text-brand-700">Facebook</a>
            <WhatsAppButton message="Hola, vi la demo de catálogo digital para tienda local. Quiero más información.">WhatsApp</WhatsAppButton>
          </div>
          <p className="mt-3 text-xs text-zinc-500">En una versión real, estos botones apuntan a tus redes.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
