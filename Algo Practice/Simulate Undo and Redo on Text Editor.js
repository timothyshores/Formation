/*

❓ PROMPT
Write a function to simulate undo and redo operations in a text editor and output the final text after applying all of the commands. The editor supports the following four commands:

"append c": Append the character 'c' to the end of the text.

"backspace": Delete the last character from the text.

"undo": Undo the most recent change to the text.

"redo": Redo the most recent undone change to the text.

The "undo" command should revert the most recent change made to the text. Meaning if the most recent command was "append", it should remove that character. If the subsequent command was "backspace", it should add the character back in.

The "redo" command should reapply the most recent change that was undone. If the most recent undone command was "append", it should add the character back. If the subsequent undone command was "backspace", it should remove the character again.

Example(s)
commands = ["append a", "append b", "append c", "backspace", "undo", "undo", "redo", "redo", "redo"]

Output: "ab"

Explanation:
* append a: appends "a"
* append b: appends "b"
* append c: appends "c"
* backspace: removes "c"
* undo: re-adds "c"
* undo: removes "c"
* redo: re-adds "c"
* redo: removes "c"
* redo: no action left to redo
 
*/

const CommandType = {
  APPEND: "append",
  BACKSPACE: "backspace",
  UNDO: "undo",
  REDO: "redo",
};

const simulateUndoRedo = (commands) => {
  const text = [];
  const history = [];
  const redoHistory = [];

  const appendChar = (char) => {
    text.push(char);
    history.push({ type: CommandType.APPEND, char });
    redoHistory.length = 0;
  };

  const backspace = () => {
    if (text.length) {
      const removedChar = text.pop();
      history.push({ type: CommandType.BACKSPACE, char: removedChar });
      redoHistory.length = 0;
    }
  };

  const undo = () => {
    if (history.length) {
      const lastCommand = history.pop();

      if (lastCommand.type === CommandType.APPEND) text.pop();
      else if (lastCommand.type === CommandType.BACKSPACE)
        text.push(lastCommand.char);

      redoHistory.push(lastCommand);
    }
  };

  const redo = () => {
    if (redoHistory.length) {
      const lastUndoCommand = redoHistory.pop();

      if (lastUndoCommand.type === CommandType.APPEND)
        text.push(lastUndoCommand.char);
      else if (lastUndoCommand.type === CommandType.BACKSPACE) text.pop();

      history.push(lastUndoCommand);
    }
  };

  for (const command of commands) {
    if (command.startsWith(CommandType.APPEND)) {
      const charToAppend = command[command.length - 1];
      appendChar(charToAppend);
    } else if (command === CommandType.BACKSPACE) backspace();
    else if (command === CommandType.UNDO) undo();
    else if (command === CommandType.REDO) redo();
  }

  return text.join("");
};

// All test cases return true

// Test Case 1: Basic operations with redo
let commands = [
  "append a",
  "append b",
  "append c",
  "backspace",
  "undo",
  "redo",
  "redo",
];
let result = simulateUndoRedo(commands);
console.log(result === "ab"); // Output: false

// Test Case 2: Multiple undos and redos
commands = [
  "append a",
  "append b",
  "append c",
  "backspace",
  "undo",
  "undo",
  "redo",
  "redo",
  "redo",
];
result = simulateUndoRedo(commands);
console.log(result === "ab"); // Output: true

// Test Case 3: Redo with no redo history
commands = ["append a", "append b", "redo"];
result = simulateUndoRedo(commands);
console.log(result === "ab"); // Output: true

// Test Case 4: Complex operations with undo and redo
commands = [
  "append a",
  "append b",
  "backspace",
  "append c",
  "undo",
  "append d",
  "undo",
  "append e",
  "redo",
  "undo",
  "redo",
];
result = simulateUndoRedo(commands);
console.log(result === "ae"); // Output: true

// Test Case 5: Redo after a new command
commands = ["append a", "append b", "undo", "redo", "append c", "redo"];
result = simulateUndoRedo(commands);
console.log(result === "abc"); // Output: true

// Test Case 6: Multiple redos
commands = [
  "append a",
  "append b",
  "append c",
  "undo",
  "undo",
  "redo",
  "redo",
  "redo",
];
result = simulateUndoRedo(commands);
console.log(result === "abc"); // Output: true

// Test Case 7: Undo and redo after multiple backspaces
commands = [
  "append a",
  "append b",
  "append c",
  "backspace",
  "backspace",
  "undo",
  "undo",
  "redo",
  "redo",
];
result = simulateUndoRedo(commands);
console.log(result === "a"); // Output: true

// Test Case 8: Continuous undos, backspaces, and redos
commands = [
  "append a",
  "append b",
  "append c",
  "undo",
  "undo",
  "undo",
  "backspace",
  "backspace",
  "backspace",
  "append d",
  "append e",
  "append f",
  "undo",
  "redo",
  "undo",
  "redo",
];
result = simulateUndoRedo(commands);
console.log(result === "def"); // Output: true
