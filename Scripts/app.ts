interface Product
{
	name: string;
	price: number;
}

function describeProduct(product: Product): string
{
	return `${product.name}: £${product.price.toFixed(2)}`;
}

const button = $(`#show-product`);
const output = $(`#result`);

button.on(`click`, () =>
{
	output.text(describeProduct(
	{
		name: "Coffee",
		price: 3.5,
	}));
});
