import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innova La Serena | Catálogo Demo",
  description: "Catálogo digital demostrativo para Innova La Serena"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
