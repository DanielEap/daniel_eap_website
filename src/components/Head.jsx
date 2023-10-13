import React, { useEffect } from 'react';

function Head() {
  useEffect(() => {
    document.title = 'Daniel Eap';
  }, []);
}
export default Head;