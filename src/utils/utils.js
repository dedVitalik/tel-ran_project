const getDiscountSize = (fullPrice, discountedPrice) => {
  const discountSize = (((fullPrice - discountedPrice) / fullPrice) * 100).toFixed(2);
  return discountSize;
};

export default getDiscountSize;
