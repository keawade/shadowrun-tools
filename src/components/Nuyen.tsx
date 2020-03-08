import React from 'react';

const Nuyen = ({ amount }: { amount: number }) => {
  const displayValue =
    amount
      .toString(10)
      .split(/(?=(?:...)*$)/)
      .join(',') + '¥';

  return <>{displayValue}</>;
};

export default Nuyen;
