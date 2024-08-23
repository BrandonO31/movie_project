// components/AnimeCard.tsx
import React from "react";
import { useSwipeable } from "react-swipeable";

interface Anime {
  title: string;
  image: string;
  description: string;
}

interface AnimeCardProps {
  anime: Anime;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, onSwipeLeft, onSwipeRight }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onSwipeLeft,
    onSwipedRight: onSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={styles.card}>
      <img src={anime.image} alt={anime.title} style={styles.image} />
      <div style={styles.info}>
        <h2 style={styles.title}>{anime.title}</h2>
        <p style={styles.description}>{anime.description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '320px',
    height: '480px',
    position: 'relative' as const,
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '70%',
    objectFit: 'cover' as const,
  },
  info: {
    padding: '20px',
    textAlign: 'center' as const,
    width: '100%',
  },
  title: {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold' as const,
  },
  description: {
    margin: '10px 0 0 0',
    fontSize: '16px',
    color: '#666',
  },
};

export default AnimeCard;
