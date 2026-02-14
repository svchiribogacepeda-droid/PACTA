import StepCard from "./StepCard";

const steps = [
  {
    step: 1,
    title: "Publica lo que quieres comprar",
    description:
      "Indica el producto, el comercio y el descuento al que quieres acceder.",
  },
  {
    step: 2,
    title: "Alguien con el beneficio te ayuda",
    description:
      "Una persona con la tarjeta o medio de pago adecuado acepta realizar la compra por ti.",
  },
  {
    step: 3,
    title: "Ambos ganan",
    description:
      "Tú ahorras plata. Quien te ayuda recibe una comisión. Solo cobramos si el descuento se concreta.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-alt">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
          ¿Cómo funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
