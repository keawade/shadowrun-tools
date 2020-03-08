import React from 'react';

import { priorities } from '../lib/data/priorities';
import Magic from './Magic';
import Metatype from './Metatype';
import Nuyen from './Nuyen';

const PriorityTable = () => {
  return (
    <div className='container'>
      <div className='grid-header'></div>
      <div className='grid-header'>Metatype</div>
      <div className='grid-header'>Attributes</div>
      <div className='grid-header'>Skills</div>
      <div className='grid-header'>Magic/Resonance</div>
      <div className='grid-header'>Resources</div>
      {priorities.map(priority => (
        <>
          <div className='grid-header priority'>{priority.priority}</div>
          <div className='grid-cell metatype'>
            <Metatype
              metatype={priority.metatype}
              metatypeAdjustmentPoints={priority.adjustmentPoints}
            />
          </div>
          <div className='grid-cell attribute'>{priority.attributes}</div>
          <div className='grid-cell skill'>{priority.skills}</div>
          <div className='grid-cell magic'>
            <Magic resonance={priority.magic} />
          </div>
          <div className='grid-cell resource'>
            <Nuyen amount={priority.resources} />
          </div>
        </>
      ))}
    </div>
  );
};

export default PriorityTable;
