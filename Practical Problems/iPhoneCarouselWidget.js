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

📆 PLAN
Outline of algorithm #:

🛠️ IMPLEMENT
function simulateCarousel(apps, commands){} // returns list of str
def simulate_carousel(apps: list[str], commands: list[str]) -> list[str]:


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/