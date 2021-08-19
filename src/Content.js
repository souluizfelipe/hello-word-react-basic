import React from 'react';

import './Content.css';


function Content ( { title, children } ) {
  return(
    <div className="content">
      <h2>
        {title}
      </h2>
      <article>
        {children}
      </article>
    </div>
  );
};

export default Content