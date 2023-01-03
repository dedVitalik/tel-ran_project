const getDiscountSize = (fullPrice, discountedPrice) => {
  const discountSize = (((fullPrice - discountedPrice) / fullPrice) * 100).toFixed(2);
  return discountSize;
};

export const sortGoods = (arrOfGoods, sortMethod = 'id') => {
  if (sortMethod === 'price') {
    return [...arrOfGoods]
      .sort((a, b) => a.price - b.price);
  } if (sortMethod === 'title') {
    return [...arrOfGoods]
      .sort((a, b) => a.title.localeCompare(b.title));
  } if (sortMethod === 'id') {
    return [...arrOfGoods]
      .sort((a, b) => a.id - b.id);
  }
  return arrOfGoods;
};

export default getDiscountSize;
