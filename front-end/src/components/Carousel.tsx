import { Img } from "react-image";

interface Project {
  name: string;
  description: string;
  image: string;
  alt: string;
  url: string;
}

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
}

const ProjectCarousel = ({ title, projects }: ProjectCarouselProps) => {
  return (
    <>
      <h2 className="text-lightBlue text-2xl font-bold mx-auto my-11">{title}</h2>
      <div className="carousel carousel-center rounded-box max-w-[81.5rem] mx-auto">
        {projects.map((project: Project) => (
          <div className="carousel-item mx-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <Img src={project.image} alt={project.alt} width={400} height={400} />
                </figure>
                <div className="card-body bg-lightBlue text-navyBlue">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel;
