export const WHATSAPP_NUMBER = "56961425029";

type WhatsAppButtonProps = {
  message: string;
  className?: string;
  children?: React.ReactNode;
};

export default function WhatsAppButton({ message, className = "", children }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 ${className}`}
    >
      {children ?? "Consultar por WhatsApp"}
    </a>
  );
}
