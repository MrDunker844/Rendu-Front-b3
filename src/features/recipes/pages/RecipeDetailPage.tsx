import { useParams } from 'react-router';
export default function RecipeDetailPage() {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-bold">Détail de la recette</h1>
      <p>{id}</p>
    </div>
  );
}
