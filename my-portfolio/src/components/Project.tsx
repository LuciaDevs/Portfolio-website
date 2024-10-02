import { Link } from 'react-router-dom';
import styles from '../style/Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'GOOD OFFICE',
    tech: 'FIREBASE, HTML, CSS, REACT JS, TYPESCRIPT, GITLAB',
    description: 'The main goal was to develop a service to optimize work in the office...',
    imageUrl: './path-to-image1.jpg',
    github: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'DRIVE2',
    tech: 'FIREBASE, HTML, CSS, REACT JS, TYPESCRIPT, GITHUB',
    description: 'The main goal is to make a clone of the original Drive2 site...',
    imageUrl: './path-to-image2.jpg',
    github: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'BIANU',
    tech: 'HTML, CSS',
    description: 'The goal of this project is to develop HTML-CSS skills...',
    imageUrl: './path-to-image3.jpg',
    github: 'https://github.com/example',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>MY PROJECTS</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.imageUrl} alt={project.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.tech}>{project.tech}</p>
              <p className={styles.description}>{project.description}</p>
              
              {/* Link para redirigir al detalle del proyecto */}
              <Link to={`/projects/${project.id}`} className={styles.githubLink}>
                Ver detalles →
              </Link>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
