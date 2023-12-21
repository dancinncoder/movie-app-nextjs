import { useRouter } from "next/router";

// /movies/122
export default function Detail() {
  const router = useRouter();
  console.log("router", router);
  const [title, id] = router.query.params || [];
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${router.query.poster_path}`} />
      <h4>{title}</h4>
      {/* 사용자가 시크릿모드로 main 페이지를 거치지 않고 바로 상세페이지로 들어왔을 때 loading을 보여줌 */}
    </div>
  );
}
