import React from 'react';
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

function ProjectList(props) {
  const { projects } = props;
  return (
    <div className='project-list'>
      {projects.map((o) => <img className='card' src={o.img} alt='' key={uuidv4()}/>)}
    </div>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}
