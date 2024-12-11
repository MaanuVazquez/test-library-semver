import { add, subtract } from "./utils";

function fibonacci(n: number) {
	if (n <= 1) return n;
	return add(fibonacci(subtract(n, 1)), fibonacci(subtract(n, 2)));
}

function fibonacciAsync(n: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fibonacci(n));
		}, 1000);
	});
}

export { fibonacci, fibonacciAsync };
