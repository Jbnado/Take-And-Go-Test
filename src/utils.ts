export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatMileage = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "kilometer",
  }).format(value);
};