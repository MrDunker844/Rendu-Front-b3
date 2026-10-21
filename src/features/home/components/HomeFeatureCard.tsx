import { Link } from 'react-router';

type HomeFeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  to: string;
};

export default function HomeFeatureCard({
  icon,
  title,
  description,
  linkLabel,
  to,
}: HomeFeatureCardProps) {
  return (
    <Link
      to={to}
      className="group flex items-start gap-5 rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
    >
      <span
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-3xl text-brand"
      >
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-bold">{title}</h2>
        <p className="text-muted">{description}</p>
        <span className="font-semibold text-brand group-hover:underline">
          {linkLabel} →
        </span>
      </div>
    </Link>
  );
}
