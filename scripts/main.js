var before = document.getElementById('before')
var command = document.getElementById("input"); 
var textarea = document.getElementById("textbox"); 
var terminal = document.getElementById("terminal");
var git = 0
// List of all the entered commands
var commands = []

// Printing banner on loading
setTimeout(() => {
    printLines(banner, "", 80);
    textarea.focus();
}, 100);

// Open listeners and and initially set the text and history to blank
window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;

// Handles the pressing of different key presses
function enterKey(e) {
    // Reload
    if (e.keyCode == 181) {
      document.location.reload(true);
    }
    // Enter Key
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("visitor:~$ " + command.innerHTML, "no-animation", 0);
        router(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    // Previous commands (up)
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    // Next Command (down)
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

// Router
function router(cmd){
    switch (cmd.toLowerCase()) {
        case "help":
            printLines(help, "color2 margin", 80);
            break;

        case "whois":
            printLines(whois, "color2 margin", 80)
            break;

        case "social":
            printLines(social, "color2 margin", 80)
            break;

        case "projects":
            printLines(projects, "color2 margin", 80)
            break;

        case "banner":
            printLines(banner, "", 80)
            break;
        
        case "history":
            addLine("<br>", "", 0);
            printLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;

        case "email":
            addLine('Opening mailto:<a href="mailto:yash.nthakre@gmail.com">yash.nthakre@gmail.com</a>...', "color2", 80);
            openNewTab(email);
            break;

        case "clear":
            setTimeout(() => {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            printLines(banner, "", 80)
            break;
        
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            openNewTab(linkedin);
            break;
        case "github":
            addLine("Opening Github...", "color2", 0);
            openNewTab(github);
            break;
        case "leetcode":
            addLine("Opening LeetCode...", "color2", 0);
            openNewTab(leetcode);
            break;
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            openNewTab(instagram);
            break;

        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

// Print the contents of a list line by line
function printLines(name, style, time){
    name.forEach((item, index) => {
        addLine(item, style, index*time);
    })
}

function addLine(text, style, time) {

    // Replace all spaces with nbsp character
    var t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }

    // Create a new 'p' and append it to the terminal just before the before
    setTimeout(() => {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;
  
      before.parentNode.insertBefore(next, before);
  
      window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

// Open a link in the new tab
// Open new Tab
function openNewTab(link) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 500);
  }
