export type ProductCategory = "Muebles" | "Tapizados" | "Decoración" | "Hogar" | "Ofertas";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  priceLabel: string;
  description: string;
  image: string;
  featured: boolean;
};

export const products: Product[] = [
  { id: "muebles-1", name: "Sofá moderno", category: "Muebles", priceLabel: "$349.990", description: "Diseño contemporáneo para living con gran comodidad.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80", featured: true },
  { id: "decoracion-1", name: "Sillón decorativo", category: "Decoración", priceLabel: "$189.990", description: "Pieza de acento ideal para rincón de lectura o sala.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80", featured: true },
  { id: "tapizados-1", name: "Cojines premium", category: "Tapizados", priceLabel: "$29.990", description: "Set textil suave para renovar sofá o dormitorio.", image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "muebles-2", name: "Juego de comedor", category: "Muebles", priceLabel: "$499.990", description: "Mesa y sillas para compartir en familia con estilo.", image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=80", featured: true },
  { id: "muebles-3", name: "Mesa lateral", category: "Muebles", priceLabel: "$79.990", description: "Mesa auxiliar compacta para living o dormitorio.", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "tapizados-2", name: "Poltrona tapizada", category: "Tapizados", priceLabel: "$219.990", description: "Confort y diseño para complementar tu espacio.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", featured: true },
  { id: "hogar-1", name: "Mueble organizador", category: "Hogar", priceLabel: "$129.990", description: "Solución práctica para mantener todo en orden.", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0f1ea?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "decoracion-2", name: "Lámpara decorativa", category: "Decoración", priceLabel: "$59.990", description: "Iluminación cálida para crear ambientes acogedores.", image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "hogar-2", name: "Set hogar", category: "Hogar", priceLabel: "$89.990", description: "Combinación de piezas funcionales para tu día a día.", image: "https://images.unsplash.com/photo-1616594039964-3c8e3c4df2e0?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "tapizados-3", name: "Banco tapizado", category: "Tapizados", priceLabel: "$99.990", description: "Asiento versátil para entrada, sala o dormitorio.", image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "decoracion-3", name: "Decoración de sala", category: "Decoración", priceLabel: "$74.990", description: "Detalles que elevan la estética de tu living.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", featured: false },
  { id: "ofertas-1", name: "Oferta especial hogar", category: "Ofertas", priceLabel: "Consultar", description: "Selección destacada con precio promocional temporal.", image: "https://images.unsplash.com/photo-1617104551722-3b2d5136642b?auto=format&fit=crop&w=1200&q=80", featured: true }
];

export const categories: Array<"Todos" | ProductCategory> = ["Todos", "Muebles", "Tapizados", "Decoración", "Hogar", "Ofertas"];
