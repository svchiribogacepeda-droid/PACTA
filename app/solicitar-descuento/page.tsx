"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FormField from "@/components/FormField";

interface FormData {
  producto: string;
  comercio: string;
  descuento: string;
  whatsapp: string;
  comentarios: string;
}

const initialForm: FormData = {
  producto: "",
  comercio: "",
  descuento: "",
  whatsapp: "",
  comentarios: "",
};

export default function SolicitarDescuento() {
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
    if (!form.producto.trim()) newErrors.producto = "Campo requerido";
    if (!form.comercio.trim()) newErrors.comercio = "Campo requerido";
    if (!form.descuento.trim()) newErrors.descuento = "Campo requerido";
    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "Campo requerido";
    } else if (!/^\+?\d{8,15}$/.test(form.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "Ingresá un número válido";
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
          title="Solicitar descuento"
          description="Contanos qué querés comprar y nosotros te conectamos con alguien que tiene el beneficio."
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
            Solicitud enviada
          </h2>
          <p className="text-text-secondary mb-6">
            Recibimos tu solicitud. Te contactaremos por WhatsApp cuando
            encontremos un socio con el descuento que necesitás.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="text-primary font-medium hover:underline"
          >
            Enviar otra solicitud
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Solicitar descuento"
        description="Contanos qué querés comprar y nosotros te conectamos con alguien que tiene el beneficio."
      />

      <div className="max-w-lg mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField
            label="Producto o servicio"
            name="producto"
            placeholder="Ej: Heladera Samsung RT38"
            required
            value={form.producto}
            onChange={handleChange}
            error={errors.producto}
          />
          <FormField
            label="Comercio"
            name="comercio"
            placeholder="Ej: Frávega, Mercado Libre, Farmacity"
            required
            value={form.comercio}
            onChange={handleChange}
            error={errors.comercio}
          />
          <FormField
            label="Descuento que buscás"
            name="descuento"
            placeholder="Ej: 30% con Banco Galicia en 3 cuotas"
            required
            value={form.descuento}
            onChange={handleChange}
            error={errors.descuento}
          />
          <FormField
            label="WhatsApp"
            name="whatsapp"
            type="tel"
            placeholder="Ej: +54 11 1234-5678"
            required
            value={form.whatsapp}
            onChange={handleChange}
            error={errors.whatsapp}
          />
          <FormField
            label="Comentarios adicionales"
            name="comentarios"
            type="textarea"
            placeholder="Cualquier detalle que nos ayude a encontrar tu descuento..."
            value={form.comentarios}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3.5 rounded-lg hover:bg-primary-hover transition-colors"
          >
            Enviar solicitud
          </button>
        </form>

        <p className="mt-6 text-xs text-text-secondary text-center">
          No compartimos tu información con terceros. Solo la usamos para
          conectarte con un socio que tenga el descuento.
        </p>
      </div>
    </>
  );
}
