import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
          Accede a descuentos que hoy{" "}
          <span className="text-primary">no puedes usar</span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Conectamos personas que quieren comprar con quienes tienen el medio de
          pago para obtener el descuento.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
