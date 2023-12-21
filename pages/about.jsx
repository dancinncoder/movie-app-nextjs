import Seo from "@/components/Seo";

export default function about() {
  return (
    <div>
      <Seo title="About" />
      <p>
        Welcome to next movie! <br /> Check the up-to-date popular movies.
      </p>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            text-align: center;
            padding: 5rem;
            width: 32rem;
            height: 80rem;
            
            }
          }
        `}
      </style>
    </div>
  );
}
