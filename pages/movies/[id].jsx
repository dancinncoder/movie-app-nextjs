import Seo from "@/components/Seo";
import { useRouter } from "next/router";

// /movies/122
export default function Detail() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div className="selected-moviecard-container">
      <Seo title={`${router.query.title}`} />
      <img src={`https://image.tmdb.org/t/p/w500${router.query.poster_path}`} />
      <div className="movie-detail-container">
        <h4>{router.query.title}</h4>
        <p>{router.query.overview}</p>
        <p>Rating : {router.query.vote_average}</p>
      </div>

      <style jsx>
        {`
          .movie-detail-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            height: 22.5rem;
            width: 18rem;
             {
              /* border: 1px solid black; */
            }
          }
          .selected-moviecard-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 2rem;
            padding: 1.5rem;
            width: 32rem;
            height: 25rem;
             {
              /* border: 1px solid red; */
            }
          }
          img {
            width: 15rem;
            border-radius: 0.5rem;
          }
          h4 {
            font-weight: 500;
             {
              /* border: 1px solid black; */
            }
            max-width: 16rem;
            height: 20%;
             {
              /* border: 1px solid pink; */
            }
            display: flex;
            align-items: center;
            margin: 0;
          }
          p {
            font-size: 0.9rem;
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
}
