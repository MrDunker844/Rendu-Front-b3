export default function Footer() {
  return (
    <footer className="border-t border-brand-light bg-white">
      <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted sm:px-8">
        Les Petites Recettes de FloFlo · Données fournies par{' '}
        <a
          href="https://dummyjson.com"
          className="underline hover:text-brand"
          target="_blank"
          rel="noreferrer"
        >
          DummyJSON
        </a>
      </p>
    </footer>
  );
}
