import Seo from "@/components/Seo";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`/api/movies`);
      setMovies([...response.data.results]);
      console.log("response.data.results", response.data.results);
    };
    fetchMovies();
  }, []);

  const router = useRouter();
  const onClick = (id, title, poster_path) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    });
  };

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      <div className="movieCardContainer">
        {movies?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="movieCard"
              onClick={() => onClick(movie.id, movie.title, movie.poster_path)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              {console.log("imgpath", movie.poster_path)}
              <h4>
                <Link
                  href={`/movies/${movie.title}/${movie.id}`}
                  legacyBehavior
                >
                  <a>{movie.title}</a>
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          img {
            width: 9rem;
            border-radius: 0.5rem;
            transition: transform 0.15s ease-in-out;
          }
          .movieCardContainer {
            border: 1px solid purple;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;
            display: flex;
            flex-wrap: wrap;
             {
              /* height: 6rem; */
            }
            width: 32rem;
            padding: 0.5rem;
          }
          .movieCard {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10rem;
            height: 18rem;
            padding: 0.3rem;
            cursor: pointer;
            &:hover img {
              transform: scale(1.02);
              box-shadow: 8px 0 12px -5px gray, -8px 0 12px -5px gray;
            }
          }
          h4 {
            font-size: 0.8rem;
            font-weight: 500;
            text-align: center;
            word-wrap: normal;
            width: 9rem;
          }
        `}
      </style>
    </div>
  );
}

export function getServerSideProps(ctx) {
  console.log(ctx);
  return {
    props: {},
  };
}
