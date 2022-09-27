export function convertPrice(price: string) {
	const length = price.length

	if (length < 3) return price

	switch (length) {
		case 4:
			return price.slice(0, 1) + ',' + price.slice(1, 4)
		case 5:
			return price.slice(0, 2) + ',' + price.slice(1, 5)
		case 6:
			return price.slice(0, 3) + ',' + price.slice(2, 6)
		case 7:
			return (
				price.slice(0, 1) + ',' + price.slice(1, 4) + ',' + price.slice(4, 7)
			)
		case 8:
			return (
				price.slice(0, 2) + ',' + price.slice(2, 5) + ',' + price.slice(5, 8)
			)
		case 9:
			return (
				price.slice(0, 3) + ',' + price.slice(3, 6) + ',' + price.slice(6, 9)
			)
	}

	return price
}
