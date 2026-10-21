type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-start gap-4 rounded-2xl border-2 border-danger bg-danger-light p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="font-semibold text-danger">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-xl bg-danger px-5 py-2 font-semibold text-white transition hover:opacity-90"
      >
        Réessayer
      </button>
    </div>
  );
}
