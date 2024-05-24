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

*/
