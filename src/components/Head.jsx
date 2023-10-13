import React, { useEffect } from 'react';
import icon from '../assets/icon.ico';
function Head() {
  useEffect(() => {
    document.title = 'Daniel Eap';
  }, []);

  return (
    <head>
      <link rel="icon" href={icon} />
    </head>
  );
}
export default Head;