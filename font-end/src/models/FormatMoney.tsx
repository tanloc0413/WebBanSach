export function formatCurrency(amount:number):JSX.Element {
  const formattedAmount = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  .format(amount)
  .replace('₫', '');
  
  return (
    <span>
      {formattedAmount}
      <span className="currency-symbol">đ</span>
    </span>
  );
}

export function formatNumberCurrency(amount:number):string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  .format(amount)
  .replace(/\s?₫/g, '');
}

export function formatCurrencyBD(amount:number):JSX.Element {
  const formattedAmount = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  .format(amount)
  .replace(/\s?₫/g, '');
  
  return (
    <p>
      {formattedAmount}
    </p>
  );
}