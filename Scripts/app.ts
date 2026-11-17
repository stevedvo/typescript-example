class Product
{
    constructor(public name: string, public price: number, public currency: "GBP" | "USD" | "EUR" = "GBP") { }

    describe(): string
    {
        return `${this.name}: ${this.currency} ${this.price.toFixed(2)}`;
    }
}

const button = $(`#show-product`);
const output = $(`#result`);
const product = new Product("Coffee", 3.5, "EUR");

button.on(`click`, () =>
{
	output.text(product.describe());
});
