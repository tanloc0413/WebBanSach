export function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export function promotionPercent(price, discountedPrice) {
  let discount = price - discountedPrice;
  let percent = (discount / price) * 100;
  return Math.round(percent);
}

