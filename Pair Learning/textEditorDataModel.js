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
