import React from 'react';

interface INRCurrencyProps {
  value: number;
}

const INRCurrency: React.FC<INRCurrencyProps> = ({ value }) => {
  const formattedValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(value);

  return <span>{formattedValue}</span>;
};

export default INRCurrency;
