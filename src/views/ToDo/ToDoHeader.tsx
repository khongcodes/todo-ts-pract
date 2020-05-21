import React from 'react';

import headerStyles from '../../styles/ToDoHeader.module.sass';

const ToDoHeader: React.FC = () => (
  <div id={headerStyles.header}>
    <h1>ToDo App</h1>
    
    <p>
      <span>
        Built with TypeScript-React 
      </span>
      
      &nbsp;
      <span>
        |
      </span>
      &nbsp;

      <a href='http://github.com/khongcodes' target='_blank' rel='noreferrer noopener'>
        Repo
      </a>
    </p>

  </div>
)

export default ToDoHeader;