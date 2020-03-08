import React from 'react';

import { priorities } from '../lib/data/priorities';
import Magic from './Magic';
import Metatype from './Metatype';

function PriorityTable() {
  return (
    <table>
      <thead>
        <tr>
          <td>Priority</td>
          <td>Metatype</td>
          <td>Attributes</td>
          <td>Skills</td>
          <td>Magic/Resonance</td>
          <td>Resources</td>
        </tr>
      </thead>
      <tbody>
        {priorities.map(priority => (
          <tr key={`priority-${priority.priority.toLowerCase()}`}>
            <td className='center'>{priority.priority}</td>
            <td>
              <Metatype priority={priority} />
            </td>
            <td className='center'>{priority.attributes}</td>
            <td className='center'>{priority.skills}</td>
            <td>
              <Magic priority={priority} />
            </td>
            <td className='center'>{priority.resources} ¥</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PriorityTable;
