# Innova La Serena Demo

Demo rápida de catálogo/vitrina digital para Innova La Serena, construida con Next.js App Router + TypeScript + Tailwind CSS. Es un sitio estático, mobile first y listo para desplegar en Vercel.

## Correr local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Deploy en Vercel

1. Subir este repositorio a GitHub.
2. En Vercel, crear un nuevo proyecto e importar el repositorio.
3. Mantener configuración por defecto de Next.js.
4. Deploy.

## Personalización rápida

- **Productos y categorías:** editar `src/data/products.ts`.
- **Número de WhatsApp:** editar `WHATSAPP_NUMBER` en `src/components/WhatsAppButton.tsx`.
- **Links de redes:** actualizar URLs en `src/app/page.tsx` y `src/components/Footer.tsx`.

## Uso de imágenes remotas

- Esta demo usa imágenes remotas genéricas (Unsplash) solo como muestra visual inicial.
- No se guardan imágenes binarias locales en el repositorio.
- Para la versión final, se recomienda reemplazar estas URLs por imágenes reales de la clienta.
- Las rutas/URLs de imagen de cada producto se configuran en `src/data/products.ts`.

## Notas

La tarjeta de producto incluye fallback visual con gradiente si una imagen remota falla, para no romper la experiencia en móvil ni el render de la página.
