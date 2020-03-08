import React from 'react';
import { startCase } from 'lodash';

import { MagicTypes, IMagic } from '../lib/interfaces/IPriority';

const Magic = ({ resonance }: { resonance: IMagic }) => {
  const displayValues = (Object.keys(resonance) as MagicTypes[]).map(key => ({
    key,
    name: startCase(key),
    value: resonance[key],
  }));

  return (
    <>
      {displayValues
        .map(displayValue => {
          switch (displayValue.key) {
            case 'mundane':
              return displayValue.name;
            case 'technomancer':
              return `${displayValue.name}: ${displayValue.value} Resonance`;
            default:
              return `${displayValue.name}: ${displayValue.value} Magic`;
          }
        })
        .join(', ')}
    </>
  );
};

export default Magic;
