"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FormField from "@/components/FormField";

interface FormData {
  tipoBeneficio: string;
  comercio: string;
  porcentaje: string;
  condiciones: string;
  contacto: string;
}

const initialForm: FormData = {
  tipoBeneficio: "",
  comercio: "",
  porcentaje: "",
  condiciones: "",
  contacto: "",
};

const tiposBeneficio = [
  { value: "credito", label: "Tarjeta de crédito" },
  { value: "debito", label: "Tarjeta de débito" },
  { value: "corporativo", label: "Beneficio corporativo" },
  { value: "programa", label: "Programa de fidelidad" },
  { value: "otro", label: "Otro" },
];

export default function PublicarDescuento() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.tipoBeneficio) newErrors.tipoBeneficio = "Seleccioná un tipo";
    if (!form.comercio.trim()) newErrors.comercio = "Campo requerido";
    if (!form.porcentaje.trim()) newErrors.porcentaje = "Campo requerido";
    if (!form.contacto.trim()) {
      newErrors.contacto = "Campo requerido";
    } else if (!/^\+?\d{8,15}$/.test(form.contacto.replace(/\s/g, ""))) {
      newErrors.contacto = "Ingresá un número válido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          title="Publicar descuento"
          description="Compartí los beneficios que no estás usando y ganá una comisión por cada operación."
        />
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8"
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
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Descuento publicado
          </h2>
          <p className="text-text-secondary mb-6">
            Tu beneficio ya está visible. Te contactaremos por WhatsApp cuando
            alguien lo necesite.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="text-primary font-medium hover:underline"
          >
            Publicar otro descuento
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Publicar descuento"
        description="Compartí los beneficios que no estás usando y ganá una comisión por cada operación."
      />

      <div className="max-w-lg mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField
            label="Tipo de beneficio"
            name="tipoBeneficio"
            type="select"
            placeholder="Seleccioná el tipo de beneficio"
            required
            value={form.tipoBeneficio}
            onChange={handleChange}
            error={errors.tipoBeneficio}
            options={tiposBeneficio}
          />
          <FormField
            label="Comercio donde aplica"
            name="comercio"
            placeholder="Ej: Frávega, Farmacity, Coto"
            required
            value={form.comercio}
            onChange={handleChange}
            error={errors.comercio}
          />
          <FormField
            label="Porcentaje de descuento"
            name="porcentaje"
            placeholder="Ej: 30% en 3 cuotas sin interés"
            required
            value={form.porcentaje}
            onChange={handleChange}
            error={errors.porcentaje}
          />
          <FormField
            label="Condiciones o restricciones"
            name="condiciones"
            type="textarea"
            placeholder="Ej: Solo martes y miércoles, tope de reintegro $15.000, válido hasta fin de mes..."
            value={form.condiciones}
            onChange={handleChange}
          />
          <FormField
            label="WhatsApp de contacto"
            name="contacto"
            type="tel"
            placeholder="Ej: +54 11 1234-5678"
            required
            value={form.contacto}
            onChange={handleChange}
            error={errors.contacto}
          />

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3.5 rounded-lg hover:bg-primary-hover transition-colors"
          >
            Publicar descuento
          </button>
        </form>

        <p className="mt-6 text-xs text-text-secondary text-center">
          Nunca vamos a pedirte datos de tu tarjeta. Solo facilitamos la
          conexión entre personas.
        </p>
      </div>
    </>
  );
}
