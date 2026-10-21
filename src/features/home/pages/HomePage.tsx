import ButtonLink from '../../../shared/components/ui/ButtonLink.tsx';
import { ROUTES } from '../../../shared/routes.ts';
import HomeFeatureCard from '../components/HomeFeatureCard.tsx';

const HERO_IMAGE_URL = 'https://cdn.dummyjson.com/recipe-images/1.webp';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-bold tracking-widest text-brand uppercase">
            Carnet de recettes du monde
          </p>
          <h1 className="font-display text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Cuisinez le monde, une petite recette à la fois
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Des pizzas italiennes aux currys indiens : trouvez une recette,
            sauvegardez vos préférées et partagez les vôtres.
          </p>
          <ButtonLink to={ROUTES.recipes}>Découvrir les recettes →</ButtonLink>
        </div>
        <img
          src={HERO_IMAGE_URL}
          alt="Une pizza margherita garnie de mozzarella et de basilic"
          className="aspect-4/3 w-full rounded-3xl object-cover shadow-xl"
        />
      </section>

      <section aria-label="Raccourcis" className="grid gap-6 md:grid-cols-2">
        <HomeFeatureCard
          icon="♡"
          title="Mes favoris"
          description="Retrouvez les recettes que vous avez sauvegardées."
          linkLabel="Voir mes favoris"
          to={ROUTES.favorites}
        />
        <HomeFeatureCard
          icon="+"
          title="Créer une recette"
          description="Partagez votre propre recette."
          linkLabel="Créer une recette"
          to={ROUTES.createRecipe}
        />
      </section>
    </div>
  );
}
