"use client";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={`container text-center ${styles.home}`}>
      <h1 className="mt-5 text-primary">Bienvenue sur mon portfolio</h1>
      <p className="lead">Découvrez mes projets et compétences en développement web.</p>
    </div>
  );
}
