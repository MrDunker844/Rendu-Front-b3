import { Link } from 'react-router';
type ButtonLinkProps = {
  to: string;
  children: string;
  variant?: 'primary' | 'outline';
};
const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition';

const VARIANT_CLASSES = {
  primary: 'bg-brand text-white hover:opacity-90',
  outline: 'border-2 border-brand bg-white text-brand hover:bg-brand-light',
};
export default function ButtonLink({
  to,
  children,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`}>
      {children}
    </Link>
  );
}
