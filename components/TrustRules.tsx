const rules = [
  {
    title: "Sin riesgo",
    description:
      "No se transfiere dinero hasta que ambas partes confirman los términos.",
  },
  {
    title: "Transparente",
    description:
      "Las comisiones se muestran antes de aceptar. Sin costos ocultos.",
  },
  {
    title: "Verificado",
    description:
      "Cada operación queda registrada y ambas partes pueden calificarse mutuamente.",
  },
];

export default function TrustRules() {
  return (
    <section className="bg-bg-alt">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
          Reglas de confianza
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-bg-main rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-secondary flex-shrink-0"
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
                <h3 className="font-semibold text-text-primary">
                  {rule.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
