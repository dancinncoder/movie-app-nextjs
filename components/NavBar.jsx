import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="logoWrapper">
        <img src="/mainlogo.png" />
        <p className="logoTitle">next movie</p>
      </div>
      <div className="LinkContainer">
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}># Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>
            # About
          </a>
        </Link>
      </div>
      <style jsx>{`
        .active {
          color: #ff6200;
        }
        a {
          font-size: 1.1rem;
          font-weight: 300;
        }
        .LinkContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          width: 100%;
        }
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 8px 0 12px -5px gray, -8px 0 12px -5px gray;
          padding: 1rem;
          height: 6rem;
        }
        img {
          width: 1.5rem;
        }
        .logoWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0;
        }
        p {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.5rem;
        }
      `}</style>
    </nav>
  );
}
