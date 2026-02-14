import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ComoFunciona() {
  return (
    <>
      <PageHeader
        title="Cómo funciona"
        description="Entendé el modelo en detalle: dos personas, un beneficio compartido."
      />

      {/* Actores */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Actor 1 */}
          <div className="bg-bg-alt rounded-xl border border-border p-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              El Comprador
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Es la persona que quiere comprar un producto o servicio y sabe que
              existe un descuento bancario o promoción, pero no tiene la tarjeta
              o el medio de pago necesario para acceder.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-primary mt-0.5">&#x2022;</span>
                Publica lo que quiere comprar
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-primary mt-0.5">&#x2022;</span>
                Indica el descuento que busca
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-primary mt-0.5">&#x2022;</span>
                Recibe el producto y paga menos
              </li>
            </ul>
          </div>

          {/* Actor 2 */}
          <div className="bg-bg-alt rounded-xl border border-border p-6">
            <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              El Socio con Beneficio
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Es la persona que tiene una tarjeta de crédito, débito o beneficio
              corporativo con descuentos activos que no está usando. En lugar de
              desperdiciarlos, los comparte y gana una comisión.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-secondary mt-0.5">&#x2022;</span>
                Publica los descuentos que tiene disponibles
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-secondary mt-0.5">&#x2022;</span>
                Acepta solicitudes de compradores
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-secondary mt-0.5">&#x2022;</span>
                Recibe una comisión por cada operación exitosa
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Flujo paso a paso */}
      <section className="bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-12">
            Flujo paso a paso
          </h2>

          <div className="space-y-0">
            {[
              {
                step: 1,
                title: "Solicitud",
                desc: "El comprador publica qué producto quiere y a qué descuento quiere acceder.",
              },
              {
                step: 2,
                title: "Match",
                desc: "Un socio con el beneficio adecuado ve la solicitud y acepta ayudar.",
              },
              {
                step: 3,
                title: "Acuerdo",
                desc: "Ambas partes confirman las condiciones: precio, comisión y forma de entrega.",
              },
              {
                step: 4,
                title: "Compra",
                desc: "El socio realiza la compra con su medio de pago y aplica el descuento.",
              },
              {
                step: 5,
                title: "Entrega y pago",
                desc: "El comprador recibe el producto, paga el monto acordado. El socio recibe su comisión.",
              },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 h-full bg-border my-1" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparencia */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-6">
          Transparencia del modelo
        </h2>
        <div className="space-y-4">
          {[
            "Las comisiones se definen antes de iniciar cualquier operación. Nadie paga nada hasta que ambas partes aceptan.",
            "La plataforma cobra una comisión fija solo cuando el descuento se concreta exitosamente. Si no se concreta, nadie paga.",
            "No almacenamos datos bancarios ni información sensible. La conexión es entre personas, no entre cuentas.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-bg-alt rounded-lg border border-border p-4"
            >
              <svg
                className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm text-text-secondary">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solicitar-descuento"
            className="bg-primary text-white font-medium px-8 py-3.5 rounded-lg hover:bg-primary-hover transition-colors"
          >
            Quiero ahorrar
          </Link>
        </div>
      </section>
    </>
  );
}
