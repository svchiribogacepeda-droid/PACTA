import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          ¡Empieza a ahorrar hoy!
        </h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Ya sea que busques un descuento o que tengas beneficios para compartir,
          hay un lugar para ti.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/solicitar-descuento"
            className="w-full sm:w-auto bg-primary text-white font-medium px-8 py-3.5 rounded-lg hover:bg-primary-hover transition-colors text-center"
          >
            Quiero ahorrar
          </Link>
          <Link
            href="/publicar-descuento"
            className="w-full sm:w-auto border border-primary text-primary font-medium px-8 py-3.5 rounded-lg hover:bg-primary/5 transition-colors text-center"
          >
            Tengo descuentos para ofrecer
          </Link>
        </div>
      </div>
    </section>
  );
}
