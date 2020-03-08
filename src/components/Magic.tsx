import React from 'react';
import { startCase } from 'lodash';

import { IMagic } from '../lib/interfaces/IPriority';

const Magic = ({ resonance }: { resonance: IMagic }) => {
  return (
    <>
      {Object.keys(resonance).map(key => {
        switch (key) {
          case 'mundane':
            return (
              <div key={`priority-magic-option-${key}`}>{startCase(key)}</div>
            );
          case 'technomancer':
            return (
              <div key={`priority-magic-option-${key}`}>
                {startCase(key)}: {resonance[key]} Resonance
              </div>
            );
          case 'fullMagician':
          case 'aspectedMagician':
          case 'mysticAdept':
          case 'adept':
            return (
              <div key={`priority-magic-option-${key}`}>
                {startCase(key)}: {resonance[key]} Magic
              </div>
            );
          default:
            // Should not be possible to hit as we have exhausted all data types
            return null;
        }
      })}
    </>
  );
};

export default Magic;
