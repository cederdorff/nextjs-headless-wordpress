import { Suspense } from "react";
import Link from "next/link";
import AuthStatus from "@/components/AuthStatus";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Headless WordPress
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
        {/* AuthStatus reads the cookies of the request, so it waits for the request.
            Suspense lets the rest of the header render right away. */}
        <Suspense fallback={null}>
          <AuthStatus />
        </Suspense>
      </nav>
    </header>
  );
}
