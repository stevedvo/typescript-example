const currencies = ["GBP", "USD", "EUR"] as const;
type Currency = (typeof currencies)[number];

class Product
{

    constructor(public readonly name: string, private price: number, private currency: Currency = "GBP") { }

    describe(): string
    {
        return `${this.name}: ${this.currency} ${this.price.toFixed(2)}`;
    }

    changePrice(newPrice: number): void
    {
    	this.price = newPrice;
    }

    setCurrency(currency: Currency): void
    {
    	this.currency = currency;
    }
}

const button = $(`#show-product`);
const output = $(`#result`);

let selectedCurrency: Currency = "EUR";
const product = new Product("Coffee", 3.5, selectedCurrency);

const parsedCurrency = parseCurrency(" banana");

console.log(parseCurrency("USD"));     // "USD"
console.log(parseCurrency(" eur "));  // "EUR"
console.log(parseCurrency("gbp"));     // "GBP"
console.log(parseCurrency("banana"));  // undefined

if (parsedCurrency !== undefined)
{
    product.setCurrency(parsedCurrency);
}

button.on(`click`, () =>
{
	product.changePrice(9.99);
	output.text(product.describe());
});

function parseCurrency(value: string): Currency | undefined
{
    const normalizedValue = value.trim().toUpperCase();

    return currencies.find(currency => currency === normalizedValue);
}