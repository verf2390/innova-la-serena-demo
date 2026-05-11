import Link from "next/link";

// Reemplazar por el número real en formato internacional sin + ni espacios.
export const WHATSAPP_NUMBER = "569XXXXXXXX";

type WhatsAppButtonProps = {
  message: string;
  className?: string;
  children?: React.ReactNode;
};

export default function WhatsAppButton({ message, className = "", children }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 ${className}`}
    >
      {children ?? "Consultar por WhatsApp"}
    </Link>
  );
}
