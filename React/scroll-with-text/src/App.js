import React, { useState } from "react";
import Text from "./text";

/**
 * For this assignment, you will be modifying styles.css
 * 1. Modify styles.css to make the text scroll vertically.
 * 2. Undo 1. and now modify styles.css to make the text scroll
 *    horizontally.
 * NOTE: DO NOT add any new CSS classes or NEW rules. You can only
 * modify the existing rules in style.css
 */

export default function App() {
	const [isVerticalScroll, setIsVerticalScroll] = useState(true);

	const toggleScroll = () => {
		setIsVerticalScroll(!isVerticalScroll);
	};

	return (
		<div className="container">
			<button onClick={toggleScroll}>Toggle Scroll</button>
			<div
				className={`box ${
					isVerticalScroll ? "vertical-scroll" : "horizontal-scroll"
				}`}
			>
				{Text}
			</div>
		</div>
	);
}
