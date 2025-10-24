import React, { useRef, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import volumeUp from '../assets/header/volume-up.png';
import volumeMute from '../assets/header/mute.png';
import './style/homepage.css';

const continueWatching = [
  {
    img: "/poster-x/AManCalledOTTO.png",
    title: "A Man Called OTTO",
    rating: 4.8,
  },
  {
    img: "/poster-x/MyPerfectStranger.png",
    title: "My Perfect Stranger",
    rating: 4.35,
  },
  {
    img: "/poster-x/BlueLock.png",
    title: "Blue Lock",
    rating: 3.5,
  },
  {
    img: "/poster-x/continue-film/Fast&FuriousX.png",
    title: "Fast&FuriousX",
    rating: 3.63,
  },
  {
    img: "/poster-x/continue-film/Rio.png",
    title: "Rio",
    rating: 4.4,
  },
  {
    img: "/poster-x/continue-film/TheLittleMermaid.png",
    title: "The Little Mermaid",
    rating: 2.35,
  },
  {
    img: "/poster-x/TheTomorrowWar.png",
    title: "The Tomorrow War",
    rating: 4.6,
  },
  {
    img: "/poster-x/Shazam.png",
    title: "Shazam Fury of The Gods",
    rating: 4.2,
  },
];

// Contoh di Homepage.jsx

const topRatingMovies = [
  {
    img: "/poster-y/suzume.png",
    alt: "suzume",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/Duty After School.png",
    alt: "Duty After School",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/Ted Lasso.png",
    alt: "Ted Lasso",
  },
  {
    img: "/poster-y/My Perfect Stranger.png",
    alt: "My Perfect Stranger",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/Alice In Borderland.png",
    alt: "Alice In Borderland",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/Blue Lock.png",
    alt: "Blue Lock",
  },
  {
    img: "/poster-y/My Hero Academia.png",
    alt: "My Hero Academia",
  },
];

const trendingMovies = [
  {
    img: "/poster-y/Avatar The Way of Water.png",
    alt: "Avatar The Way of Water",
    top10: true,
  },
  {
    img: "/poster-y/Duty After School.png",
    alt: "Duty After School",
    top10: true,
  },
  {
    img: "/poster-y/Jurassic World Dominion.png",
    alt: "Jurassic World Dominion",
    top10: true,
  },
  {
    img: "/poster-y/My Perfect Stranger.png",
    alt: "My Perfect Stranger",
    top10: true,
  },
  {
    img: "/poster-y/Sonic The Hedgehog 2.png",
    alt: "Sonic The Hedgehog 2",
    top10: true,
  },
  {
    img: "/poster-y/Spiderman Across The Spiderverse.png",
    alt: "Spiderman Across The Spiderverse",
    top10: true,
  },
  {
    img: "/poster-y/The Batman.png",
    alt: "The Batman",
    top10: true,
  },
];

const newReleaseMovies = [
  {
    img: "/poster-y/Avatar The Way of Water.png",
    alt: "Avatar The Way of Water",
    top10: true,
  },
  {
    img: "/poster-y/Duty After School.png",
    alt: "Duty After School",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/The Devil All The Time.png",
    alt: "The Devil All The Time",
  },
  {
    img: "/poster-y/My Perfect Stranger.png",
    alt: "My Perfect Stranger",
    badge: "Episode Baru"
  },
  {
    img: "/poster-y/Sonic The Hedgehog 2.png",
    alt: "Sonic The Hedgehog 2",
    top10: true,
  },
  {
    img: "/poster-y/Spiderman Across The Spiderverse.png",
    alt: "Spiderman Across The Spiderverse",
    top10: true,
  },
  {
    img: "/poster-y/Black Adam.png",
    alt: "Black Adam",
  },
];
const Homepage = () => {
  // Volume toggle state
  const [muted, setMuted] = useState(false);

  // Ref for card wrapper melanjutkan nonton
  const continueRef = useRef(null);

  // Carousel section refs
  const carouselRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Scroll handler for continue watching
  const handleContinueScroll = (dir) => {
    if (!continueRef.current) return;
    const cardWidth = 302 + 20;
    continueRef.current.scrollLeft += dir * cardWidth;
  };

  // Carousel scroll handler
  const handleCarouselScroll = (sectionIdx, dir) => {
    const ref = carouselRefs[sectionIdx].current;
    if (!ref) return;
    const item = ref.querySelector('.movie-item');
    if (!item) return;
    const itemWidth = item.offsetWidth;
    ref.scrollLeft += dir * itemWidth * 3;
  };

  return (
    <>
      <div className='scaffold'><Navbar /></div>
      
      
      {/* Hero Section - First Row: Landscape Image with Caption */}
       <div className="hero">
        <img 
          src="/poster/Duty After School.png" 
          alt="Duty After School" 
          className="hero-bg" 
        />
        <div className="hero-content">
          <h1>Duty After School</h1>
          <p>When mysterious spheres appear in the sky, students are forced to participate in a deadly game that will determine humanity's fate.</p>
          <div className="hero-buttons">
            <button className="primary">▶ Play</button>
            <button className="secondary">+ My List</button>
            <div className="age">13+</div>
            <button 
              className="volume-btn" 
              onClick={() => setMuted(!muted)}
            >
              <img 
                src={muted ? volumeMute : volumeUp} 
                alt={muted ? "Unmute" : "Mute"} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row: Continue Watching */}
      <div className="main-wrapper">
        <div className="movie-carousel-section">
          <h4>Continue Watching</h4>
          <div className="carousel-container">
            <div className="movie-list" ref={carouselRefs[0]}>
              {continueWatching.map((movie, index) => (
                <div key={index} className="movie-item">
                  <img src={movie.img} alt={movie.title} />
                  <div className="description">
                    <span>{movie.title}</span>
                    <span>⭐ {movie.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="button-slide prev-button" 
              onClick={() => handleCarouselScroll(0, -1)}
            >
              ‹
            </button>
            <button 
              className="button-slide next-button" 
              onClick={() => handleCarouselScroll(0, 1)}
            >
              ›
            </button>
          </div>
        </div>

        {/* Third Row: Top Rating */}
        <div className="movie-carousel-section">
          <h4>Top Rating</h4>
          <div className="carousel-container">
            <div className="movie-list" ref={carouselRefs[1]}>
              {topRatingMovies.map((movie, index) => (
                <div key={index} className="movie-item">
                  <img src={movie.img} alt={movie.alt} />
                  {movie.top10 && (
                    <div className="top10-badge">
                      <p>TOP</p>
                      <p>10</p>
                    </div>
                  )}
                  {movie.badge && (
                    <div className="fresh-episode-badge">
                      {movie.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button 
              className="button-slide prev-button" 
              onClick={() => handleCarouselScroll(1, -1)}
            >
              ‹
            </button>
            <button 
              className="button-slide next-button" 
              onClick={() => handleCarouselScroll(1, 1)}
            >
              ›
            </button>
          </div>
        </div>

        {/* Fourth Row: Trending */}
        <div className="movie-carousel-section">
          <h4>Trending</h4>
          <div className="carousel-container">
            <div className="movie-list" ref={carouselRefs[2]}>
              {trendingMovies.map((movie, index) => (
                <div key={index} className="movie-item">
                  <img src={movie.img} alt={movie.alt} />
                  {movie.top10 && (
                    <div className="top10-badge">
                      <p>TOP</p>
                      <p>10</p>
                    </div>
                  )}
                  {movie.badge && (
                    <div className="fresh-episode-badge">
                      {movie.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button 
              className="button-slide prev-button" 
              onClick={() => handleCarouselScroll(2, -1)}
            >
              ‹
            </button>
            <button 
              className="button-slide next-button" 
              onClick={() => handleCarouselScroll(2, 1)}
            >
              ›
            </button>
          </div>
        </div>

        {/* Fifth Row: New Release */}
        <div className="movie-carousel-section">
          <h4>New Release</h4>
          <div className="carousel-container">
            <div className="movie-list" ref={carouselRefs[3]}>
              {newReleaseMovies.map((movie, index) => (
                <div key={index} className="movie-item">
                  <img src={movie.img} alt={movie.alt} />
                  {movie.top10 && (
                    <div className="top10-badge">
                      <p>TOP</p>
                      <p>10</p>
                    </div>
                  )}
                  {movie.badge && (
                    <div className="fresh-episode-badge">
                      {movie.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button 
              className="button-slide prev-button" 
              onClick={() => handleCarouselScroll(3, -1)}
            >
              ‹
            </button>
            <button 
              className="button-slide next-button" 
              onClick={() => handleCarouselScroll(3, 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div> 


      <div className='scaffold'><Footer /></div>
    </>
  );
};

export default Homepage;