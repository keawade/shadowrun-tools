import React from 'react';
import { startCase } from 'lodash';

import { IPriority, ResonanceType } from '../lib/interfaces/IPriority';

const Magic = ({ priority }: { priority: IPriority }) => {
  const displayValues = (Object.keys(
    priority.resonanceType
  ) as ResonanceType[]).map(key => ({
    key,
    name: startCase(key),
    value: priority.resonanceType[key],
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
