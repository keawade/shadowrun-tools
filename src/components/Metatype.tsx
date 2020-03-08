import React from 'react';
import { startCase } from 'lodash';

import { IPriority } from '../lib/interfaces/IPriority';

const Metatype = ({ priority }: { priority: IPriority }) => {
  return (
    <>
      {priority.metatype.map(startCase).join(', ')} ({priority.adjustmentPoints}
      )
    </>
  );
};

export default Metatype;
