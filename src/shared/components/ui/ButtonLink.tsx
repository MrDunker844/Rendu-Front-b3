import { Link } from 'react-router';
import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonVariant,
} from './buttonStyles.ts';

type ButtonLinkProps = {
  to: string;
  children: string;
  variant?: ButtonVariant;
};

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]}`}
    >
      {children}
    </Link>
  );
}
