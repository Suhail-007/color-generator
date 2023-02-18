import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('red').all(10));
  const [error, setError] = useState(false);

  const submitHandler = function(e) {
    try {
      e.preventDefault();
      const colors = new Values(`${color}`).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <section className='container'>
      <h3>Color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={color}
            placeholder='hex/colorName/rgb/hsl'
            onChange={e => setColor(e.target.value)} 
            className={error ? 'error': ''}
            />
          <button className='btn'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((li, index) => <SingleColor key={index} {...li} index={index} hex={li.hex} />)}
      </section>
    </>
  )
}

export default App