import { Link, NavLink } from 'react-router';
import { ROUTES } from '../../routes';

const NAVIGATION_LINKS = [
  { label: 'Accueil', path: ROUTES.home },
  { label: 'Recettes', path: ROUTES.recipes },
  { label: 'Favoris', path: ROUTES.favorites },
];

export default function Header() {
  return (
    <header className="border-b border-brand-light bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-8 sm:py-5">
        <Link
          to={ROUTES.home}
          className="font-display text-xl font-bold text-brand sm:text-2xl"
        >
          Les Petites Recettes de Floflo
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === ROUTES.home}
                  className={({ isActive }) =>
                    `border-b-[3px] pb-1 font-medium transition-colors hover:text-brand ${
                      isActive
                        ? 'border-brand text-brand'
                        : 'border-transparent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to={ROUTES.createRecipe}
                className={({ isActive }) =>
                  `inline-block rounded-xl bg-brand px-4 py-2 font-semibold text-white transition-opacity hover:opacity-90 ${
                    isActive ? 'ring-3 ring-brand-light' : ''
                  }`
                }
              >
                <span className="sm:hidden">Créer</span>
                <span className="hidden sm:inline">+ Créer une recette</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
