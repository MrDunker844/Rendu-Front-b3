import ButtonLink from '../components/ui/ButtonLink.tsx';
import { ROUTES } from '../routes';

export default function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Page introuvable</h1>
      <p className="mt-2 text-muted">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <ButtonLink to={ROUTES.home}>Retour à l'accueil</ButtonLink>
    </section>
  );
}
