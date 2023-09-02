/*
 * This exercise focuses on working with immutable data in a way that
 * prepares you to use this.setState(...) for class based React
 * components and the useState hook for function based React components.
 *
 * - Each function should be considered complete when all tests for that function pass.
 * - Assume valid input (eg: no out of bound indices)
 *   but remember that some objects may have arbitrary properties not specified in comments
 *
 * See https://codesandbox.io/s/immutable-data-exercise-reference-solution-n7j4h for a reference solution once you have finished
 *
 */

/**
 * Return a new array with `val` added to the end of `arr`
 *
 * @param {Array<any>} arr
 * @param {any} val
 */
export function immutableAppend(arr, val) {
	return [...arr, val];
}

/**
 * Return a new array with `val` added to the beginning of `arr`
 *
 * @param {Array<any>} arr
 * @param {any} val
 */

export function immutablePrepend(arr, val) {
	return [val, ...arr];
}

/**
 * Return a new array with the values of `arr` but with the element
 * at `index` removed. The returned array should be 1 element shorter
 * than `arr`
 *
 * @param {Array<any>} arr
 * @param {number} index
 */
export function immutableDeleteAtIndex(arr, index) {
	return arr.filter((_, i) => i !== index);
}

/**
 * Return a new array with the values of `arr`, but with the value
 * at index `index` replaced with `val`
 *
 * @param {Array<any>} arr
 * @param {any} val
 * @param {number} index
 */
export function immutableReplace(arr, val, index) {
	const newArr = [...arr];
	newArr[index] = val;
	return newArr;
}

/**
 * Return an array of all TODOs where the `completed` property is false.
 * The order of the TODO elements should not change
 *
 * example `todos` value:
 *
 * [
 *   { name: 'Wake Up', completed: true },
 *   { name: 'Finish Assignment', completed: false }
 * ]
 *
 * @param {*} todos
 */
export function immutableHideDoneTodos(todos) {
	return todos.filter((todo) => todo.completed === false);
}

/**
 * Return a new TODO object where the `completed` property's truthyness
 * is false. This solution should still work with arbitrary properties
 * on the `todo` object that may be added by other engineers in the
 * future.
 *
 * example `todo` value:
 *
 * {
 *   name: 'Finish Assignment',
 *   complete: false,
 *   // + support for additional arbitrary fields
 * }
 *
 * @param {*} todo
 */
export function immutableToggleComplete(todo) {
	return { ...todo, complete: !todo.complete };
}

/**
 * Imagine we're building a minesweeper game.
 * Our React component's state holds a grid, which is a two dimensional
 * arry of Objects. Each Object is the state for each cell in the
 * minesweeper game. (has this been clicked? Is it a bomb?)
 *
 * This function should toggle the "revealed" property of the specified cell
 *
 * example `state` value:
 *
 * {
 *   grid: [
 *     [{ revealed: false, isBomb: false }, { revealed: false, isBomb: true }],
 *     [{ revealed: false, isBomb: false }, { revealed: false, isBomb: true }]
 *   ]
 * }
 *
 * we want to return a new object where all of the data is the same, except
 * `state.grid[row][col].revealed` is toggled
 *
 * @param {*} state
 * @param {*} row
 * @param {*} col
 */

export function immutableToggleRevealed(state, row, col) {
	const updatedGrid = state.grid.map((rowArray, rowIndex) =>
		rowIndex === row
			? rowArray.map((cell, colIndex) =>
					colIndex === col ? { ...cell, revealed: !cell.revealed } : cell
			  )
			: rowArray
	);

	return { ...state, grid: updatedGrid };
}

function uglyClone(data) {
	// do not use this for the exercise
	// this is an expensive way to clone data
	// using this in your solution defeats the point of this exercise
	return JSON.parse(JSON.stringify(data));
}

function ensureUnmodified(data, fn) {
	const copy = uglyClone(data);

	fn();

	try {
		expect(data).toEqual(copy, "custom");
	} catch (e) {
		throw new Error("Input data was modified");
	}
}

describe("immutableAppend", () => {
	test("immutableAppend([], 'hello world')", () => {
		const data = [];
		ensureUnmodified(data, () => {
			const result = immutableAppend(data, "hello world");
			expect(result).toEqual(["hello world"]);
		});
	});
	test("immutableAppend([1, 2, 3], 4)", () => {
		const data = [1, 2, 3];
		ensureUnmodified(data, () => {
			const result = immutableAppend(data, 4);
			expect(result).toEqual([1, 2, 3, 4]);
		});
	});
});

describe("immutablePrepend", () => {
	test("immutablePrepend([], 'hi')", () => {
		const data = [];
		ensureUnmodified(data, () => {
			const result = immutablePrepend(data, "hi");
			expect(result).toEqual(["hi"]);
		});
	});
});

describe("immutableDeleteAtIndex", () => {
	test("immutableDeleteAtIndex(['hello', 'world'], 0)", () => {
		const data = ["hello", "world"];
		ensureUnmodified(data, () => {
			const result = immutableDeleteAtIndex(data, 0);
			expect(result).toEqual(["world"]);
		});
	});

	test("immutableDeleteAtIndex(['hello', 'world'], 1)", () => {
		const data = ["hello", "world"];
		ensureUnmodified(data, () => {
			const result = immutableDeleteAtIndex(data, 1);
			expect(result).toEqual(["hello"]);
		});
	});

	test("immutableDeleteAtIndex([0, 1, 2, 3, 4, 5], 3)", () => {
		const data = [0, 1, 2, 3, 4, 5];
		ensureUnmodified(data, () => {
			const result = immutableDeleteAtIndex(data, 3);
			expect(result).toEqual([0, 1, 2, 4, 5]);
		});
	});

	test("immutableDeleteAtIndex(['boo'], 0)", () => {
		const data = ["boo"];
		ensureUnmodified(data, () => {
			const result = immutableDeleteAtIndex(data, 0);
			expect(result).toEqual([]);
		});
	});
});

describe("immutableReplace", () => {
	test("immutableReplace(['goodbye', 'world'], 'hello', 0)", () => {
		const data = ["goodbye", "world"];
		ensureUnmodified(data, () => {
			const result = immutableReplace(data, "hello", 0);
			expect(result).toEqual(["hello", "world"]);
		});
	});

	test("immutableReplace(['a', 'x', 'c', 'd'], 'b', 1)", () => {
		const data = ["a", "x", "c", "d"];
		ensureUnmodified(data, () => {
			const result = immutableReplace(data, "b", 1);
			expect(result).toEqual(["a", "b", "c", "d"]);
		});
	});

	test("immutableReplace(['x', 'y', '?'], 'z', 2)", () => {
		const data = ["x", "y", "?"];
		ensureUnmodified(data, () => {
			const result = immutableReplace(data, "z", 2);
			expect(result).toEqual(["x", "y", "z"]);
		});
	});
});

describe("immutableHideDoneTodos", () => {
	test("immutableHideDoneTodos([])", () => {
		const data = [];
		ensureUnmodified(data, () => {
			const result = immutableHideDoneTodos(data);
			expect(result).toEqual([]);
		});
	});

	test("immutableHideDoneTodos([{ name: 'incomplete task', completed: false }])", () => {
		const data = [{ name: "incomplete task", completed: false }];
		ensureUnmodified(data, () => {
			const result = immutableHideDoneTodos(data);
			expect(result).toEqual(data);
		});
	});

	test("immutableHideDoneTodos([{ name: 'complete task', completed: true }])", () => {
		const data = [{ name: "complete task", completed: true }];
		ensureUnmodified(data, () => {
			const result = immutableHideDoneTodos(data);
			expect(result).toEqual([]);
		});
	});

	test("immutableHideDoneTodos(/* 2 completed, 1 not complete */)", () => {
		const data = [
			{ name: "1", completed: true },
			{ name: "2", completed: false },
			{ name: "3", completed: true },
		];
		ensureUnmodified(data, () => {
			const result = immutableHideDoneTodos(data);
			expect(result).toEqual([{ name: "2", completed: false }]);
		});
	});
});

describe("immutableToggleComplete", () => {
	test("immutableToggleComplete({ name: 'unfinished', complete: false })", () => {
		const data = { name: "unfinished", complete: false };
		ensureUnmodified(data, () => {
			const result = immutableToggleComplete(data, "hi");
			expect(result).toEqual({ name: "unfinished", complete: true });
		});
	});

	test("immutableToggleComplete({ name: 'finished', complete: true })", () => {
		const data = { name: "unfinished", complete: true };
		ensureUnmodified(data, () => {
			const result = immutableToggleComplete(data, "hi");
			expect(result).toEqual({ name: "unfinished", complete: false });
		});
	});

	test("immutableToggleComplete({ name: 'extra props', complete: true, ... })", () => {
		const data = {
			name: "extra props",
			foo: 1,
			bar: 2,
			doNotExplicitlyCodeThisProperty: 3,
			useAgenericSolutionInstead: 4,
			completed: true,
		};
		immutableToggleComplete(data, () => {
			const result = immutableDeleteAtIndex(data, "hi");
			expect(result).toEqual({
				name: "extra props",
				foo: 1,
				bar: 2,
				doNotExplicitlyCodeThisProperty: 3,
				useAgenericSolutionInstead: 4,
				completed: false,
			});
		});
	});
});

describe("immutableToggleRevealed", () => {
	test("immutableToggleRevealed(2x2 grid, 0, 1)", () => {
		const data = {
			grid: [
				[
					{ revealed: false, isBomb: false },
					{ revealed: false, isBomb: true },
				],
				[
					{ revealed: false, isBomb: false },
					{ revealed: false, isBomb: true },
				],
			],
		};
		ensureUnmodified(data, () => {
			const result = immutableToggleRevealed(data, 0, 1);
			expect(result).toEqual({
				grid: [
					[
						{ revealed: false, isBomb: false },
						{ revealed: true, isBomb: true },
					],
					[
						{ revealed: false, isBomb: false },
						{ revealed: false, isBomb: true },
					],
				],
			});
		});
	});
});
