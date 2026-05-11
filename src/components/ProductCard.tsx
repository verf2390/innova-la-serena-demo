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
    <article className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:shadow-soft">
      <div className="relative h-48 w-full bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-end bg-gradient-to-br from-pink-200/80 via-rose-100 to-purple-100 p-4">
            <p className="rounded-xl bg-white/85 px-3 py-2 text-sm font-semibold text-zinc-700">{product.name}</p>
          </div>
        )}
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">{product.category}</span>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-zinc-600">{product.description}</p>
        <p className="text-sm font-semibold text-brand-700">{product.priceLabel}</p>
        <WhatsAppButton message={message} className="w-full">Consultar por WhatsApp</WhatsAppButton>
      </div>
    </article>
  );
}
