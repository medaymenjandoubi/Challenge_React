import React from 'react'
import '../App.css';
import johnDoe from './Images/john-doe.jpg'
import proj1 from './Images/proj1.jpg'
import proj2 from './Images/proj2.jpg'
import proj3 from './Images/proj3.jpg'
import proj4 from './Images/proj4.jpg'
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
        {/* Project Card  */}
        <div className="project-card">
          <img src={proj1} alt="project" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        {/* Project Card  */}
        <div className="project-card">
          <img src={proj2} alt="project" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        {/* Project Card  */}
        <div className="project-card">
          <img src={proj3} alt="project" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        {/* Project Card  */}
        <div className="project-card">
          <img src={proj4} alt="project" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      </div>
    </section>
  )
}

export default Projects