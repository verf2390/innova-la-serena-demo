import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innova La Serena | Catálogo digital",
  description: "Demo de catálogo digital para mostrar productos, categorías y contacto directo por WhatsApp."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
