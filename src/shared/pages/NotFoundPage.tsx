import { Link } from 'react-router';
import { ROUTES } from '../routes';

export default function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Page introuvable</h1>
      <p className="mt-2 text-muted">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <Link
        to={ROUTES.home}
        className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:opacity-90"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
}
