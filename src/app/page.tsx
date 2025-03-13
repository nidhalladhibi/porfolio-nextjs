"use client";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`container text-center d-flex flex-column align-items-center justify-content-center vh-100 ${styles.home}`}>
      {/* Animation du titre */}
      <motion.h1 
        className="text-primary fw-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bienvenue sur mon portfolio
      </motion.h1>

      {/* Animation du sous-titre */}
      <motion.p 
        className="lead text-secondary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Développeur Full Stack passionné par la création d’applications performantes et intuitives.
      </motion.p>

      {/* Animation de l’image */}
      <motion.img
        src="/developer.avif"
        alt="Développeur"
        className="img-fluid my-3"
        width={300}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      />

      {/* Animation des boutons */}
      <motion.div
        className="mt-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="/projects" passHref>
          <Button variant="primary" className="me-2">Voir mes projets</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="outline-dark">Me contacter</Button>
        </Link>
      </motion.div>
    </div>
  );
}
