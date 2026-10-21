type LoadingSpinnerProps = {
  label?: string;
};

export default function LoadingSpinner({
  label = 'Chargement…',
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-4 py-16 text-muted"
    >
      <span
        aria-hidden="true"
        className="size-10 animate-spin rounded-full border-4 border-brand-light border-t-brand"
      />
      <p>{label}</p>
    </div>
  );
}
