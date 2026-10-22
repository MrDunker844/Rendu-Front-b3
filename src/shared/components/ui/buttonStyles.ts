export type ButtonVariant = 'primary' | 'outline';

export const BUTTON_BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50';

export const BUTTON_VARIANT_CLASSES = {
  primary: 'bg-brand text-white hover:opacity-90',
  outline: 'border-2 border-brand bg-white text-brand hover:bg-brand-light',
};
