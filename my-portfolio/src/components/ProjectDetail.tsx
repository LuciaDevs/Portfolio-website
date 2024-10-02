
import { useParams } from 'react-router-dom';

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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId!));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.tech}</p>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        GitHub →
      </a>
    </div>
  );
};

export default ProjectDetail;
