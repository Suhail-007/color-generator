import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, index, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500);

    return () => clearTimeout(timeout);
  }, [alert]);


  const copyColor = function() {
    setAlert(true);
    navigator.clipboard.writeText(`#${hex}`);
  }

  return (
    <article onClick={copyColor} style={{backgroundColor: `rgb(${bcg})`}} className={`color ${index >6 && 'color-light'}`}>
      <p className='percent-value'>{weight}%</p>
      <p className = 'color-value'> #{ hex }</p>
    { alert && <p className={`alert ${index > 2 && 'color-light'}`}>Copied to clipboard</p> }
    </article>
  )
}

export default SingleColor