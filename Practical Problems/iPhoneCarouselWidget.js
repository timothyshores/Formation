/*

❓ PROMPT
You are designing an iPhone carousel widget that displays a list of apps in a vertical scrolling carousel. The apps array contains the names of the apps in the carousel from bottom to the top (index 0 for the bottom). The commands array contains the list of commands to navigate the vertical carousel, in all lowercase: "scroll up", "scroll down", and "tap".

The carousel works as follows:
* Initially, the first app in the apps array is selected.
* If the user taps on an app, it opens the app.
* If the user scrolls up, the carousel moves one app up. If the user scrolls down, the carousel moves one app down.
* If the user scrolls past the top of the carousel, the carousel wraps around to the bottom, and vice versa.
* Your task is to simulate the behavior of the carousel and return an array of strings representing the names of the opened apps.

Assume with every subsequent command, the user is already back on the home page, scrolling through the carousel again.

Example(s)
let apps = ["Maps", "Music", "Photos", "Messages", "Settings"]
    index   0       1        2         3            4
            Bottom                                  Top

Commands
            tap
                                                    down
            up
                    up
            down
                                                    tap


let commands = ["tap", "scroll down", "scroll up", "scroll up", "scroll down", "scroll down", "tap"]
                Maps    Settings        Maps        Music       Maps            Settings        


In this example, we first tap on "Maps" in the carousel (Index 0) 
Scrolling down takes you to "Settings" (Index 4)
Scrolling up takes you back to "Maps" (Index 0)
Scrolling up takes you to "Music" (Index 1)
Scrolling down takes you to "Maps" (index 0 
Scrolling down again takes you to "Settings" (index 4) <--)
Tap to open "Settings" (index 4)

Output: ["Maps", "Settings"]

🔎 EXPLORE
List your assumptions & discoveries:
- Start at index 0 or the bottom of the carousel
- If you scroll down at index 0 then go up to the last element in the apps array at index apps.length - 1
- If you scroll down at the last element then you go back to the first element at index 0

Insightful & revealing test cases:
- Empty command list
- Single "tap" command
- Single "scroll up" command
- Single "scroll down" command
- Multiple "scroll up" and "scroll down" commands
- Mix of "tap", "scroll up", and "scroll down" commands
- Carousel with only one app

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: 
- Modify the array for every command
- At index 0
    - For scroll up call .shift() and push it to the end of the array
    - For scroll down call .pop() and then call .unshift() to add to the front of the array
    - For tap command .push() apps[0] into our openedApps or results array that we return
Time: O(n * m) 
- n is the number of elements in the commands array 
- m is the number of times we call .unshift on the array which is a O(N) time complexity operation
    - need to reassign all n number of elements in the app array to the next block of contiguous memory
Space: O(k)
- Need to store the modified apps array with k number of apps or elements in the array

Algorithm 2: Keep track of current index
Time: O(n) to loop through n number of elements in the the commands array
Space: O(k) 
- need a current index variable and then k is the number of apps that the user taps on
- Max size commands array if every command was "tap"

📆 PLAN
Outline of algorithm #: 2

Initialize an empty array called openedApps 
If commands list array is empty then return empty openedApps array

Initialize a variable using let currentIndex and set to 0
Iterate through all commands in the command list
- One of 3 commands
    - "tap"
        - Push apps[currentIndex] to openedApps array
    - "scroll down"
        - Move down 1 app
            index === 0 ? apps.length - 1 : index - 1;
    - "scroll up"
        - Move up 1 app
            index === apps.length - 1 ? 0 : index + 1;
        
Return openedApps

🛠️ IMPLEMENT
function simulateCarousel(apps, commands){} // returns list of str
def simulate_carousel(apps: list[str], commands: list[str]) -> list[str]:


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/