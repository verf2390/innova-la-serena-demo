"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

type ProductCardProps = { product: Product };

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const message = `Hola, vengo desde el catálogo web de Innova La Serena. Me interesa consultar por: ${product.name}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 sm:h-56">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-end bg-gradient-to-br from-pink-200/80 via-rose-100 to-purple-100 p-4">
            <p className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-700">{product.name}</p>
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-zinc-900">{product.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{product.description}</p>
          </div>
          <p className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">{product.priceLabel}</p>
        </div>

        <WhatsAppButton message={message} className="w-full py-3 text-base">
          Consultar este producto
        </WhatsAppButton>
      </div>
    </article>
  );
}
