import React from 'react';
import { startCase } from 'lodash';

import {
  PriorityMetatype,
  PriorityMetatypeAdjustmentPoints,
} from '../lib/interfaces/IPriority';

const Metatype = ({
  metatype,
  metatypeAdjustmentPoints,
}: {
  metatype: PriorityMetatype;
  metatypeAdjustmentPoints: PriorityMetatypeAdjustmentPoints;
}) => {
  return (
    <>
      {metatype.map(startCase).join(', ')} ({metatypeAdjustmentPoints})
    </>
  );
};

export default Metatype;
