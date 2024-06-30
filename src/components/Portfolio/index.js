import Loader from 'react-loaders'
import projects from './data'
import { FaGithub } from "react-icons/fa"
import { FaPager } from "react-icons/fa6";


import './index.scss'

const Portfolio = () => {


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Portfolio
          </h1>
          <form action="https://github.com/Javigsz">
            <input type="submit" value="Github" className="flat-button" />
          </form>
        </div>
        <div className="todo">
          {projects.map(project => 
            <div className="caja" key={project.id}>
              <img src={project.img} alt={project.name} />
              <div className="info">
                <div className="title">
                  <div>
                    <h3>{project.name}</h3>
                  </div>
                  <div>
                    <FaGithub className="button-link" size={27} onClick={() => window.open(project.link, '_blank')}/>
                    {project.deploy && <FaPager className="button-link" size={30} onClick={() => window.open(project.deploy, '_blank')}/>}  
                  </div>
                </div>
                <p>{project.desc}</p>
                <div>
                  {project.tools.map(tool =>                     
                      <span style={{color: '#0CAFFF'}}>{tool}</span>                    
                  )}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio

/*           {project.tools.map(tool => 
  <span>{tool}</span>
)}*/