interface Product
{
	name: string;
	price: number;
}

function describeProduct(product: Product): string
{
	return `${product.name}: £${product.price.toFixed(2)}`;
}

const button = document.querySelector<HTMLButtonElement>("#show-product");
const output = document.querySelector<HTMLParagraphElement>("#result");

button?.addEventListener("click", () =>
{
	if (output)
	{
		output.textContent = describeProduct(
		{
			name: "Coffee",
			price: 3.5,
		});
	}
});
