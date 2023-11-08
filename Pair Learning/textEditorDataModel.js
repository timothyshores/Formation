/*

Text Editor Data Model

We're going to build the data model for a text editor that supports the basic operations needed for typing. This data model will take the form of a class that has methods for:
- typing one character at a time
- backspace and delete to remove text one character at a time
- moving the cursor

How can this class be designed so that the main operations are as efficient as possible?

EXAMPLE(S)
const editor = new TextEditor("Text").moveEnd();
console.log(editor.toString(), "Text");
editor.backspace();
console.log(editor.toString(), "Tex");
editor.addChar('t'). addChar(" ").addChar("E").addChar("d").addChar("i").addChar("t");
console.log(editor.toString(), "Text Edit");
editor.moveStart().delete().delete().delete().delete().delete();
console.log(editor.toString(), "Edit");

const e2 = new TextEditor("otter");
console.log(e2.toString(), "otter");
e2.backspace().backspace().backspace().backspace().backspace();
console.log(e2.toString() === "", true);
e2.addChar("a").moveBack().delete();
console.log(e2.toString() === "", true);

FUNCTION SIGNATURE
class TextEditor {
    // initialize the editor, optionally with some starter text
    constructor(initialText = "") {}

    // remove the character before the cursor
    backspace() {}

    // remove the character at the cursor. Cursor moves to the next character
    delete() {}

    // add a new character before the cursor
    addChar(c) {}

    // move the cursor back one
    moveBack() {}

    // move the cursor forward one
    moveNext() {}

    // Move the cursor to the start. A new character added here will be the first.
    moveStart() {}

    // move the cursor to the end. A new character here will be last.
    moveEnd() {}

    // Return the text currently in the editor as a single string.
    toString() {}
}

*/

class TextEditor {
	#text;
	#cursorPosition;

	constructor(text = "") {
		this.#text = text;
		this.#cursorPosition = text.length;
	}

	#removeCharacterAtIndex(index) {
		if (index < 0 || index >= this.#text.length) return;
		this.#text =
			this.#text.substring(0, index) + this.#text.substring(index + 1);
	}

	backspace() {
		if (this.#cursorPosition === 0) return this;
		this.#removeCharacterAtIndex(--this.#cursorPosition);
		return this;
	}

	delete() {
		if (this.#cursorPosition === this.#text.length) return this;
		this.#removeCharacterAtIndex(this.#cursorPosition);
		return this;
	}

	#addCharacterAtIndex(character, index) {
		if (character.length !== 1) return;
		this.#text =
			this.#text.substring(0, index) + character + this.#text.substring(index);
	}

	addChar(character) {
		this.#addCharacterAtIndex(character, this.#cursorPosition++);
		return this;
	}

	moveBack() {
		this.#cursorPosition = Math.max(0, this.#cursorPosition - 1);
		return this;
	}

	moveNext() {
		this.#cursorPosition = Math.min(
			this.#text.length,
			this.#cursorPosition + 1
		);
		return this;
	}

	moveStart() {
		this.#cursorPosition = 0;
		return this;
	}

	moveEnd() {
		this.#cursorPosition = this.#text.length;
		return this;
	}

	toString() {
		return this.#text;
	}
}

// All test cases return true

// Test initial state
let editor = new TextEditor("Hello, World!");
console.log(editor.toString() === "Hello, World!"); // Initial text

// Test backspace in different positions
editor.moveEnd().backspace();
console.log(editor.toString() === "Hello, World"); // End position

editor = new TextEditor("Hello, World!"); // Reset editor state
editor.moveStart().moveNext().backspace();
console.log(editor.toString() === "ello, World!"); // Middle position

editor.moveStart().backspace();
console.log(editor.toString() === "ello, World!"); // Start position

// Test delete in different positions
editor = new TextEditor("Hello, World!"); // Reset editor state
editor.moveStart().delete();
console.log(editor.toString() === "ello, World!"); // Start position

editor.moveStart().moveNext().delete();
console.log(editor.toString() === "elo, World!"); // Middle position

editor.moveEnd().delete();
console.log(editor.toString() === "elo, World!"); // End position

// Test addChar in different positions
editor = new TextEditor("Hello, World!"); // Reset editor state
editor.moveStart().addChar("A");
console.log(editor.toString() === "AHello, World!"); // Start position

editor.moveStart().moveNext().addChar("B");
console.log(editor.toString() === "ABHello, World!"); // Middle position

editor.moveEnd().addChar("C");
console.log(editor.toString() === "ABHello, World!C"); // End position

// Complex operations and chaining
const complexEditor = new TextEditor("Complex");
complexEditor
	.moveStart()
	.delete()
	.moveEnd()
	.backspace()
	.addChar("!")
	.moveStart()
	.addChar("C");
console.log(complexEditor.toString() === "Comple!"); // Complex sequence

const chainingEditor = new TextEditor("Chain");
chainingEditor
	.moveStart()
	.delete()
	.addChar("C")
	.moveEnd()
	.backspace()
	.addChar("n");
console.log(chainingEditor.toString() === "Chain"); // Method chaining

// Test on an empty editor
const emptyEditor = new TextEditor();
emptyEditor.addChar("A").backspace().delete().moveBack().moveNext();
console.log(emptyEditor.toString() === ""); // Empty editor
