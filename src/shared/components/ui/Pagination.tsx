import Button from './Button.tsx';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav aria-label="Pagination" className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="outline"
          disabled={isFirstPage}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Précédent
        </Button>

        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={pageNumber === currentPage ? 'primary' : 'outline'}
            onClick={() => onPageChange(pageNumber)}
          >
            {String(pageNumber)}
          </Button>
        ))}

        <Button
          variant="outline"
          disabled={isLastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Suivant
        </Button>
      </div>

      <p aria-live="polite" className="text-sm text-muted">
        Page {currentPage} sur {totalPages}
      </p>
    </nav>
  );
}
