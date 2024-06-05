import Loader from 'react-loaders'
import projects from './data'
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
            <div className="caja" key={project.id} onClick={() => window.open(project.link, '_blank')}>
              <img src={project.img} alt={project.name} />
              <div className="info">
                <h3><b>{project.name}</b></h3>
                <p>{project.desc}</p>
              </div>
              Tools:&nbsp; 
              {project.tools.map(tool => 
                <span>{tool}</span>
              )}

            </div>
          )}
          <div className="caja"></div>
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