"use client";
import { BsCardChecklist, BsFilm, BsShop, BsCloudSun, BsChatDots, BsShieldLock } from "react-icons/bs";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projet 1 - TO DO List",
    description: "Application de gestion des tâches avec validation par code PIN.",
    github: "https://github.com/nidhalladhibi/todo-app.git",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <BsCardChecklist size={50} color="#007bff" />,
  },
  {
    title: "Projet 2 - Cinéma",
    description: "Application de gestion des films et des réservations.",
    github: "https://github.com/nidhalladhibi/cinema.git",
    technologies: ["React", "Redux", "JavaScript"],
    icon: <BsFilm size={50} color="#ff6b6b" />,
  },
  {
    title: "Projet 3 - vabeneshop",
    description: "Site e-commerce responsive avec animations.",
    github: "https://github.com/nidhalladhibi/vabeneshop.git",
    technologies: ["React", "Bootstrap", "CSS"],
    icon: <BsShop size={50} color="#28a745" />,
  },
  {
    title: "Projet 4 - Application Météo",
    description: "Affichage des prévisions météo en temps réel via API.",
    github: "https://github.com/nidhalladhibi/weather-.git",
    technologies: ["React", "API OpenWeather", "JavaScript"],
    icon: <BsCloudSun size={50} color="#ffcc00" />,
  },
  {
    title: "Projet 5 - Chat en Temps Réel",
    description: "Chat avec gestion de base de données via Mongoose.",
    github: "https://github.com/nidhalladhibi/manipuler-et-g-rer-votre-base-de-donn-es-en-utilisant-Mongoose.git",
    technologies: ["React", "Mongoose", "Node.js"],
    icon: <BsChatDots size={50} color="#6f42c1" />,
  },
  {
    title: "Projet 6 - Création Password Crypté",
    description: "Génération et gestion de mots de passe cryptés.",
    github: "https://github.com/nidhalladhibi/creation-password-Crypt-.git",
    technologies: ["CSS", "HTML", "Firebase"],
    icon: <BsShieldLock size={50} color="#dc3545" />,
  }
];

export default function Projects() {
  return (
    <Container className="mt-5">
      {/* Animation du titre */}
      <motion.h1 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Mes Projets
      </motion.h1>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            {/* Animation d'apparition des cartes */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow-sm text-center p-3">
                {/* Animation de rebond sur l'icône */}
                <motion.div 
                  className="mb-3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>

                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.github} target="_blank">
                    Voir sur GitHub
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
