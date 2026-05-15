interface FavoritesButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export default function FavoritesButton({
  isFavorite,
  onToggle,
}: FavoritesButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 transition-all text-white hover:text-white/80"
      title={isFavorite ? 'Hiq nga të preferuarat' : 'Shto në të preferuara'}
    >
      {isFavorite ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      )}
    </button>
  );
}