import PageHeader from "@/components/PageHeader";

export default function Legal() {
  return (
    <>
      <PageHeader
        title="Legal y confianza"
        description="Reglas claras para que todos operen con tranquilidad."
      />

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Reglas básicas */}
        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Reglas básicas de uso
          </h2>
          <div className="space-y-3">
            {[
              "La plataforma conecta personas. No realiza compras, no gestiona pagos ni actúa como intermediario financiero.",
              "Cada operación se acuerda entre las partes antes de concretarse. Nadie paga nada hasta que ambos confirman los términos.",
              "La comisión de la plataforma se cobra únicamente cuando el descuento se concreta exitosamente.",
              "Los usuarios son responsables de verificar las condiciones de los descuentos y promociones antes de acordar una operación.",
              "Está prohibido publicar información falsa, descuentos inexistentes o condiciones engañosas.",
            ].map((rule, i) => (
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
                <p className="text-sm text-text-secondary">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Uso responsable */}
        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Uso responsable
          </h2>
          <div className="bg-bg-alt rounded-xl border border-border p-6 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">
              Esta plataforma fue diseñada para que las personas puedan
              aprovechar descuentos y promociones que de otra forma se
              desperdiciarían. El uso de la plataforma implica aceptar estas
              condiciones:
            </p>
            <ul className="space-y-2">
              {[
                "No compartir datos sensibles (números de tarjeta, claves, CVV) a través de la plataforma ni fuera de ella.",
                "No utilizar la plataforma para fines ilegales o que violen los términos y condiciones de los emisores de tarjetas.",
                "Respetar los acuerdos pactados entre las partes. Si surgiera un inconveniente, comunicarlo de inmediato.",
                "Calificar honestamente a la otra parte después de cada operación para mantener la confianza de la comunidad.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    &#x2022;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Aviso importante
          </h2>
          <div className="bg-bg-alt rounded-xl border border-border p-6 space-y-3">
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-text-primary">
                DescuentosCompartidos no es una entidad financiera.
              </strong>{" "}
              No ofrecemos productos bancarios, créditos, ni servicios de pago.
              No estamos vinculados con ningún banco, emisor de tarjetas o
              programa de beneficios.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Los descuentos y promociones publicados en la plataforma son
              responsabilidad de las entidades que los emiten. No garantizamos
              la disponibilidad, vigencia ni condiciones de ninguna promoción.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              El uso de la plataforma es bajo responsabilidad de cada usuario.
              Recomendamos verificar siempre las condiciones del descuento
              directamente con el comercio o la entidad emisora antes de
              concretar cualquier operación.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
