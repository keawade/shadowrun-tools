import React from 'react';

function Nuyen({ amount }: { amount: number }) {
  const displayValue =
    amount
      .toString(10)
      .split(/(?=(?:...)*$)/)
      .join(',') + '¥';

  return <>{displayValue}</>;
}

export default Nuyen;
