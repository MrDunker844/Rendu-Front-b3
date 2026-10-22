import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonVariant,
} from './buttonStyles.ts';

type ButtonProps = {
  children: string;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]}`}
    >
      {children}
    </button>
  );
}
