import { add, subtract } from "./utils";

function fibonacci(n: number) {
	if (n <= 1) return n;
	return add(fibonacci(subtract(n, 1)), fibonacci(subtract(n, 2)));
}

export { fibonacci };
