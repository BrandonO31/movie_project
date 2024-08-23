// pages/index.tsx
import React, { useState } from "react";
import AnimeCard from "../components/AnimeCard";

const animeList = [
  {
    title: "Naruto",
    image: "https://example.com/naruto.jpg",
    description: "A young ninja with a dream to become the strongest ninja.",
  },
  {
    title: "One Piece",
    image: "https://example.com/onepiece.jpg",
    description: "A pirate searching for the ultimate treasure.",
  },
  // Add more anime objects
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    console.log("Disliked:", animeList[currentIndex].title);
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
  };

  const handleSwipeRight = () => {
    console.log("Liked:", animeList[currentIndex].title);
    setCurrentIndex((prev) => (prev + 1) % animeList.length);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Anime Tinder</h1>
      <div style={styles.cardContainer}>
        {animeList.length > 0 && (
          <AnimeCard
            anime={animeList[currentIndex]}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        )}
      </div>
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, backgroundColor: '#ff4d4d' }} onClick={handleSwipeLeft}>
          Dislike
        </button>
        <button style={{ ...styles.button, backgroundColor: '#4caf50' }} onClick={handleSwipeRight}>
          Like
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    padding: '20px',
  },
  header: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  cardContainer: {
    width: '320px',
    height: '480px',
    position: 'relative' as const,
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between' as const,
    width: '200px',
  },
  button: {
    width: '90px',
    height: '50px',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
    transition: 'background-color 0.2s ease',
  },
};

export default HomePage;
