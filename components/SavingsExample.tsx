export default function SavingsExample() {
  return (
    <section className="bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-4">
          Ejemplo real de ahorro
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-xl mx-auto">
          Así se reparte el beneficio en una operación típica.
        </p>

        <div className="bg-bg-alt rounded-2xl border border-border p-6 md:p-8 max-w-lg mx-auto">
          {/* Precio original */}
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-sm text-text-secondary">
              Precio del producto
            </span>
            <span className="text-lg font-semibold text-text-primary">
              $500.000
            </span>
          </div>

          {/* Descuento */}
          <div className="flex justify-between items-center py-3 border-b border-border">
            <span className="text-sm text-text-secondary">
              Descuento bancario (40%)
            </span>
            <span className="text-lg font-semibold text-secondary">
              -$200.000
            </span>
          </div>

          {/* Desglose */}
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Tú pagas</span>
              <span className="text-xl font-bold text-primary">$350.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">
                Tu socio recibe
              </span>
              <span className="text-sm font-medium text-secondary">
                $130.000
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">
                Comisión plataforma
              </span>
              <span className="text-sm font-medium text-text-secondary">
                $20.000
              </span>
            </div>
          </div>

          {/* Resultado */}
          <div className="mt-6 pt-4 border-t border-border text-center">
            <p className="text-sm text-text-secondary">Tu ahorro neto</p>
            <p className="text-2xl font-bold text-secondary">$150.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
