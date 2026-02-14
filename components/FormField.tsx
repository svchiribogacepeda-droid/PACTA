interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "number" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: string;
  options?: { value: string; label: string }[];
}

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
  options,
}: FormFieldProps) {
  const baseClasses =
    "w-full px-4 py-3 rounded-lg border text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const borderClass = error ? "border-red-400" : "border-border";

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-text-primary"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={4}
          className={`${baseClasses} ${borderClass} resize-none`}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${borderClass}`}
        >
          <option value="">{placeholder || "Seleccionar..."}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${borderClass}`}
        />
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
