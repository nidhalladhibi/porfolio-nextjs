"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://github.com/nidhalladhibi/todo-app");
        if (!res.ok) throw new Error("Erreur lors du chargement des projets");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Mes Projets</h1>
      {loading ? <p>Chargement...</p> : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
