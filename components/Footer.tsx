import Link from "next/link";

const footerLinks = [
  { href: "/como-funciona", label: "¿Cómo funciona?" },
  { href: "/solicitar-descuento", label: "Solicitar descuento" },
  { href: "/publicar-descuento", label: "Publicar descuento" },
  { href: "/legal", label: "Legal y confianza" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-4xl font-bold text-primary">
              PACTA<span className="text-text-primary"></span>
            </p>
            <p className="mt-2 text-sm text-text-secondary max-w-xs">
              Conectamos personas que quieren comprar con quienes tienen el
              medio de pago para obtener el descuento.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-text-primary mb-1">
              Navegación
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-text-secondary">
          <p>
            Esta plataforma no ofrece productos financieros ni bancarios. Solo
            facilita la conexión entre personas.
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} PACTA. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
