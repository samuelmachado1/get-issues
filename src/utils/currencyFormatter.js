const currencyFormatter = (value) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl',
  });
  return formatter.format(value);
};

export default currencyFormatter;
