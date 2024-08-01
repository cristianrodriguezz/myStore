export const formatUSD = (number, decimal) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: !decimal ? 0 : decimal,
  }).format(number)

}