type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <p
      role="status"
      className="rounded-2xl border-2 border-dashed border-border bg-white p-10 text-center text-muted"
    >
      {message}
    </p>
  );
}
