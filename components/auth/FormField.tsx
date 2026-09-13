type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

export default function FormField({
  label,
  name,
  type = "text",
  autoComplete,
  required = true,
  defaultValue,
  placeholder,
}: FormFieldProps) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-green"
      />
    </label>
  );
}
