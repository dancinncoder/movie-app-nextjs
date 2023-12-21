import { useRouter } from "next/router";

// /movies/122
export default function Detail() {
  const router = useRouter();
  console.log("router", router);
  return "detail";
}
