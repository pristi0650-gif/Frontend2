import React from 'react'
import ProjectChild from './ProjectChild'
import { ProjectDatas } from '../Constants/ProjectDatas'


function ProjectParent() {
  return (
    <div className='grid sm:grid-cols-2'>
      {
        ProjectDatas.map((proj)=>(
          <ProjectChild
          key={proj.id}
          image={proj.img}
          name={proj.name}
          description={proj.desc}
          url={proj.url}
          buttons={proj.button}
          />
        ))
      }
    </div>
  )
}

export default ProjectParent
