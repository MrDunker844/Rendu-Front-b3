const VARIANT_CLASSES = {
  brand: 'bg-brand-light text-brand',
  success: 'bg-success-light text-success',
  warning: 'bg-amber-100 text-amber-800',
  neutral: 'bg-stone-100 text-stone-600',
};
type BadgeProps = {
  variant?: 'brand' | 'success' | 'warning' | 'neutral';
  children: string;
};
export default function Badge({ variant = 'neutral', children }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </span>
  );
}
