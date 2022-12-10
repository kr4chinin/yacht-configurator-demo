let formatter = new Intl.NumberFormat('pt-br', {
	style: 'currency',
	currency: 'EUR',
	minimumFractionDigits: 0
})

class CurrencyFormatter {
	format(value: number) {
		return formatter.format(value).replace(/^(\D+)/, '$1 ') // add space after currency symbol
	}
}

const currencyFormatter = new CurrencyFormatter()

export { currencyFormatter }
