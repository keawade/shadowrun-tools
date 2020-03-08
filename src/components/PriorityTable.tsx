import React, { useState } from 'react';

import { priorities } from '../lib/data/priorities';
import Magic from './Magic';
import Metatype from './Metatype';
import Nuyen from './Nuyen';

const PriorityTable = () => {
  const [selection, setSelection] = useState([
    'metatype',
    'attributes',
    'skills',
    'magic',
    'resources',
  ] as Array<'metatype' | 'attributes' | 'skills' | 'magic' | 'resources'>);

  return (
    <div className='container'>
      <div className='grid-header'></div>
      <div className='grid-header'>Metatype</div>
      <div className='grid-header'>Attributes</div>
      <div className='grid-header'>Skills</div>
      <div className='grid-header'>Magic/Resonance</div>
      <div className='grid-header'>Resources</div>
      {priorities.map((priority, index) => (
        <>
          <div className='grid-header priority'>{priority.priority}</div>
          <div
            className={`grid-cell metatype${
              selection[index] === 'metatype' ? ' selected' : ''
            }`}
          >
            <Metatype
              metatype={priority.metatype}
              metatypeAdjustmentPoints={priority.adjustmentPoints}
            />
          </div>
          <div
            className={`grid-cell attribute${
              selection[index] === 'attributes' ? ' selected' : ''
            }`}
          >
            {priority.attributes}
          </div>
          <div
            className={`grid-cell skills${
              selection[index] === 'skills' ? ' selected' : ''
            }`}
          >
            {priority.skills}
          </div>
          <div
            className={`grid-cell magic${
              selection[index] === 'magic' ? ' selected' : ''
            }`}
          >
            <Magic resonance={priority.magic} />
          </div>
          <div
            className={`grid-cell resources${
              selection[index] === 'resources' ? ' selected' : ''
            }`}
          >
            <Nuyen amount={priority.resources} />
          </div>
        </>
      ))}
    </div>
  );
};

export default PriorityTable;
