import React, { useState, Fragment } from 'react';

import { priorities } from '../lib/data/priorities';
import Magic from './Magic';
import Metatype from './Metatype';
import Nuyen from './Nuyen';
import { PriorityOption } from '../lib/interfaces/IPriority';
import { clone } from 'lodash';

const PriorityTable = () => {
  const [selection, setSelection] = useState([
    'metatype',
    'attributes',
    'skills',
    'magic',
    'resources',
  ] as [
    PriorityOption,
    PriorityOption,
    PriorityOption,
    PriorityOption,
    PriorityOption
  ]);

  const select = (category: PriorityOption, priority: number) => {
    if (selection[priority] === category) {
      // Escape if no change needed.
      return;
    }

    // Find current selection of that priority
    const existing = selection[priority];
    // Find current priority of new selection
    const existingIndex = selection.indexOf(category);

    const newSelection = clone(selection);
    // Set the new priority
    newSelection[priority] = category;
    // Set the original category of this priority to the old priority for this category.
    newSelection[existingIndex] = existing;

    // Update the state
    setSelection(newSelection);
  };

  return (
    <div className='container'>
      <div className='grid-header'></div>
      <div className='grid-header'>Metatype</div>
      <div className='grid-header'>Attributes</div>
      <div className='grid-header'>Skills</div>
      <div className='grid-header'>Magic/Resonance</div>
      <div className='grid-header'>Resources</div>
      {priorities.map((priority, index) => (
        <Fragment key={`priority-row-${priority.priority}`}>
          <div className='grid-header priority'>{priority.priority}</div>
          <div
            className={`grid-cell metatype${
              selection[index] === 'metatype' ? ' selected' : ''
            }`}
            onClick={() => select('metatype', index)}
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
            onClick={() => select('attributes', index)}
          >
            {priority.attributes}
          </div>
          <div
            className={`grid-cell skills${
              selection[index] === 'skills' ? ' selected' : ''
            }`}
            onClick={() => select('skills', index)}
          >
            {priority.skills}
          </div>
          <div
            className={`grid-cell magic${
              selection[index] === 'magic' ? ' selected' : ''
            }`}
            onClick={() => select('magic', index)}
          >
            <Magic resonance={priority.magic} />
          </div>
          <div
            className={`grid-cell resources${
              selection[index] === 'resources' ? ' selected' : ''
            }`}
            onClick={() => select('resources', index)}
          >
            <Nuyen amount={priority.resources} />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default PriorityTable;
