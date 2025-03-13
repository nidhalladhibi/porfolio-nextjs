import Image from 'next/image';

export default function About() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 bg-white p-5 shadow rounded">
          <h1 className="text-center text-primary mb-4">À propos de moi</h1>

          <div className="text-center mb-4">
            <Image
              src="/monprofil.jpg"
              width={200}
              height={200}
              className="rounded-circle border border-3 border-primary"
              alt="Ma photo de profil"
            />
          </div>

          <p className="lead text-center">
            Passionné par le développement web, je suis un développeur Full Stack en formation chez <strong>GoMyCode</strong>.
          </p>

          <h2 className="text-secondary mt-4">Compétences techniques</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Frontend :</strong> Bootstrap, Tailwind CSS, JavaScript (ES6, DOM, Hooks, Redux, React Router)</li>
            <li className="list-group-item"><strong>Backend :</strong> Node.js, Express, MongoDB (Mongoose, Modélisation des données)</li>
            <li className="list-group-item"><strong>Algorithmique :</strong> OOP, Décision et récursivité</li>
            <li className="list-group-item"><strong>Autres :</strong> Debugging, API avec Postman</li>
          </ul>

          <h2 className="text-secondary mt-4">Certifications</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MongoDB Certification</li>
            <li className="list-group-item">Postman (REST API) Certification</li>
          </ul>

          <h2 className="text-secondary mt-4">Stack technique</h2>
          <div className="d-flex flex-wrap gap-2">
            {[
              "React.js", "Redux", "Bootstrap", "Tailwind CSS", "JavaScript (ES6+)",
              "HTML/CSS", "Node.js", "Express.js", "MongoDB & Mongoose"
            ].map(skill => (
              <span key={skill} className="badge bg-primary p-2">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
