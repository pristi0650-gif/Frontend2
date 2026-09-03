import React from 'react'
import Projectchild from './Projectchild'
import { ProjectDatas } from '../Constants/ProjectDatas'


function ProjectParent() {
  return (
    <div className='grid sm:grid-cols-2'>
      {
        ProjectDatas.map((proj)=>(
          <Projectchild
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
