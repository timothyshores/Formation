/*
❓ PROMPT
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

Example(s)
changePi("xpix") == "x3.14x"
changePi("pipi") == "3.143.14"
changePi("pip") == "3.14p"

🔎 EXPLORE
State your assumptions & discoveries:
· Want to replace "pi" with 3.14
· Do NOT replace "Pi", "pI" nor "PI" only "pi"
· Input parameter can be an empty string
· Function must handle no occurrences to multiple occurrences of "pi"

Create examples & test cases:

console.log(changePi("") === "");
console.log(changePi("p") === "p");
console.log(changePi("i") === "i");
console.log(changePi("P") === "P");
console.log(changePi("1") === "1");
console.log(changePi("2") === "2");
console.log(changePi("PI") === "PI");
console.log(changePi("P1") === "P1");
console.log(changePi("Pi") === "Pi");
console.log(changePi("pI") === "pI");
console.log(changePi("p1") === "p1");
console.log(changePi("pi") === "3.14");
console.log(changePi("pi1") === "3.141");
console.log(changePi("pii") === "3.14i");
console.log(changePi("pip") === "3.14p");
console.log(changePi("ppi") === "p3.14");
console.log(changePi("ip ip") === "ip ip");
console.log(changePi("xpix") === "x3.14x");
console.log(changePi("ppii") === "p3.14i");
console.log(changePi("pipi") === "3.143.14");
console.log(changePi("pi159") === "3.14159");
console.log(changePi("pi pi pi") === "3.14 3.14 3.14");
console.log(changePi("pi159265359" === "3.14159265359"));
console.log(changePi("with pi occurring") === "with 3.14 occurring");
console.log(changePi("without p i occurring") === "without p i occurring");

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: ON)
Space: O()

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT */

const changePi = (word) => {};

/*
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/
