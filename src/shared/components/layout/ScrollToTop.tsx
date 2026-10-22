import { useEffect } from 'react';
import { useLocation } from 'react-router';

// React Router change le contenu sans recharger la page : le navigateur garde
// donc la position de scroll. On remonte en haut à chaque changement d'URL.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}
