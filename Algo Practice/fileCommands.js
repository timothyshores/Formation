/*

❓ PROMPT
Imagine a file system that supports some simple commands for moving among directories and creating files. Each command is a string that consists of the action and then the directory or file. For this problem, we're concerned with the commands "cd" for "change directory" and "touch" which creates a file. If you've used a the command line on a computer running a variant of the Unix operating system, you might find these two command familiar.

The "cd" command changes the current location to the directory listed. The directory is named with a string that consists of letters and numbers. You may assume that all of the directories exist and there is no nesting of directories. "cd" just goes to the named director where ever it is (not quite the same as the real Unix command).

The "touch" command takes a file name as a parameter and creates a file with that name if it doesn't exist.

The task here is to simulate the commands and at the end, return the name of the directory with the most files. 

Example(s)
Given this example:

commands = [
  "cd dir1",
  "touch fileA"
  "cd dir2",
  "touch fileB",
  "touch fileB",
  "cd dir1",
  "touch fileC"
]

First we `cd` (change directory) into dir1. Once dir1 is visible to the code, we create a fileA.
At this point, our file system looks something like this:
    dir1
        -fileA

Then, we `cd` into dir2. We then touch fileB twice. The second time `touch` calls fileB, it already exists so no action is taken.
At this point, our file system looks something like this:
    dir1
        -fileA
    dir2
        -fileB

Lastly, we `cd` back into dir1 and call `touch` on fileC. A third file is then created in dir1.
At this point, our file system looks something like this:
    dir1
        -fileA
        -fileC
    dir2
        -fileB

At the end, we want to count which directory has the most files and return the name of the directory: dir1.

Notes 
- The first command will always be a 'cd' command
- A directory can have a file with the same name in the directory
- Directory and file names are case sensitive
    - E.g. Dir1 and dir1 are 2 seperate directories
    - File1 and file1 are 2 unique files would be 2 unique files in a directory

🔎 EXPLORE
List your assumptions & discoveries:
- Commands is an array of strings 
    - Every string represents a command
        - Types of commands
            - cd changes directory
            - touch create a file
        - Both commands will be followed by a space
            - Following cd is the directory to navigate into
            - Following touch is the file name to be created
        - If the touch command is duplicated in the same directory only one file is created with that name
 - After processing all commands return the directory with the most files

Insightful & revealing test cases:

// Basic usage
console.log(processCommands([
  "cd dir1",
  "touch fileA",
  "cd dir2",
  "touch fileB",
  "touch fileB",
  "cd dir1",
  "touch fileC",
])); // 'dir1'

// All files in the same directory
console.log(processCommands([
  "cd dir1",
  "touch fileA",
  "touch fileB",
  "touch fileC",
])); // 'dir1'

// Multiple directories with equal number of files
console.log(processCommands([
  "cd dir1",
  "touch fileA",
  "cd dir2",
  "touch fileB",
  "cd dir3",
  "touch fileC",
])); // Returns either 'dir1', 'dir2' or 'dir3

console.log(processCommands([])); // null or ""

// Multiple directories with different number of files
console.log(processCommands([
  "cd dir1",
  "touch fileA",
  "touch fileB",
  "cd dir2",
  "touch fileC",
  "cd dir3",
  "touch fileD",
  "touch fileE",
  "touch fileF",
])); // 'dir3'

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Create hashmap, set directory name as key and files as a set or array of strings. Return key with most number of unique elements or file names
Time: O(N) where N is the number of operations
Space: O(N) where N is the number of unique directory and file names

📆 PLAN
Outline of algorithm #: 1

Initialize an empty object call data

Iterate through the array
- Call split on every element in the commands input array
    - First element will be either "cd" or "touch" to change directory or create a file
    - Second element will be the directory or file name if the command is "cd" or "touc
- If command is "cd"
    - Initialize the key to the second element of the array
- If command is "touch"
    - Add the second element of the array to the Set

Initialize two variables
    - let maxSize = 0
    - let largestDirectory = ''

Iterate through all key value pairs in the object
- Call Set.size to get the number of unique elements in the Set
- If the current directory has more unique files then maxSize
    - Set maxSize to the number of unique files in the current directory
    - Set largestDirectory to the current directory

Return largestDirectory

*/

const createFileStorage = (commands) => {
  const fileStorage = {};
  let currentDirectory = null;

  for (const command of commands) {
    const [commandType, name] = command.split(" ");

    if (commandType === "cd") {
      const directoryName = name;
      fileStorage[directoryName] = new Set();
      currentDirectory = directoryName;
    } else {
      const fileName = name;
      fileStorage[currentDirectory].add(fileName);
    }
  }

  return fileStorage;
};

const getLargestDirectory = (fileStorage) => {
  let largestDirectory = null;
  let maxSize = 0;

  for (const [currDirectory, files] of Object.entries(fileStorage)) {
    if (files.size > maxSize) {
      maxSize = files.size;
      largestDirectory = currDirectory;
    }
  }

  return largestDirectory;
};

const processCommands = (commands) =>
  getLargestDirectory(createFileStorage(commands));

// All test cases return true

// Empty input array returns null
console.log(processCommands([]) === null);

// All files in the same directory
console.log(
  processCommands(["cd dir1", "touch fileA", "touch fileB", "touch fileC"]) ===
    "dir1"
);

// Provided example
console.log(
  processCommands([
    "cd dir1",
    "touch fileA",
    "cd dir2",
    "touch fileB",
    "touch fileB",
    "cd dir1",
    "touch fileC",
  ]) === "dir1"
);

// Multiple directories with equal number of files
console.log(
  ["dir1", "dir2", "dir3"].includes(
    processCommands([
      "cd dir1",
      "touch fileA",
      "cd dir2",
      "touch fileB",
      "cd dir3",
      "touch fileC",
    ])
  )
);

// Multiple directories with different number of files
console.log(
  processCommands([
    "cd dir1",
    "touch fileA",
    "touch fileB",
    "cd dir2",
    "touch fileC",
    "cd dir3",
    "touch fileD",
    "touch fileE",
    "touch fileF",
  ]) === "dir3"
);
