// custom app에서는 globals css를 import 할 수 있다.
import "../styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* Layout의 children */}
    </Layout>
  );
}
