export const formatAmount = (price: number) => {
  price = Math.abs(price);
  return new Intl.NumberFormat('ua-UA', {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 2
  }).format(price)
    .replace('UAH', '')
    .replace(',', ' ')
    .trim();
};