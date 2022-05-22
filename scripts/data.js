// Constants
const linkedin = "https://www.linkedin.com/in/yashnthakre/";
const instagram = "https://www.instagram.com/yash.nthakre/";
const github = "https://github.com/thakreyn/";
const leetcode = "https://leetcode.com/thakreyn/";
const email = 'mailto:yash.nthakre@gmail.com';
const resume = 'https://drive.google.com/file/d/1MmdT3AzKjshXsmQ4Lfe9827savmQsd0Y/view?usp=sharing';
const spotify = 'https://open.spotify.com/user/rroifv76mly9jbiqnrt5rd5r6?si=ce5c671aabf14dca'
var today = new Date()

// Intro (Who is Yash Thakre?)
about = [
    "<br>",
    "Hey, I'm Yash Thakre! 👋",
    "<br>",
    "I'm a software developer and a Final year Computer Science Major from India 🇮🇳.",
    "I love to build things that are useful and can have a positive impact on other people's lives.",
    "Having said that, I'm always ready to work on quirky projects (like this terminal website) and",
    "am always ready to explore new things and collaborate with others.",
    "I have been coding for a few years now and have dabbled in a lot of different fields and technologies,",
    "gathering a lot of knowledge and insights.",
    "Outside of the professional space, I am an avid reader and love learning about history and culture.",
    "Sports is an inseparable part of my life and it (along with some good music) is what keeps me sane",
    "and active after staring at the screen for hours on end.",
    "<br>",
    "The joy of building things (be it relationships, teams or software) is what keeps me going. So",
    "feel free to connect with me as we all have a lot to learn from each other.",
    "<br>",
    "Hope you explore and enjoy this website! 🙏🏻",
    "<br>"
  ];

// Banner
banner = [
    "<br>",
    '<span class = "index">' + String(today) + '</span>',
    '<span class="index">Yash Thakre (YT)</span>',
    "<br>",
"   ██  ██   █████  ███████ ██   ██     ████████ ██   ██  █████  ██   ██ ██████  ███████",
"   ██  ██  ██   ██ ██      ██   ██        ██    ██   ██ ██   ██ ██  ██  ██   ██ ██     ",
"    ████   ███████ ███████ ███████        ██    ███████ ███████ █████   ██████  █████  ",
"     ██    ██   ██      ██ ██   ██        ██    ██   ██ ██   ██ ██  ██  ██   ██ ██     ",
"     ██    ██   ██ ███████ ██   ██        ██    ██   ██ ██   ██ ██   ██ ██   ██ ███████",
"<br>",
    '<span class="color2">Welcome to my Terminal based Portfolio Website..</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
    // '<span class="color2"></span>',
    "<br>",
]


// Help Commands
help = [
    "<br>",
    '👦🏻  <span class="command">about</span>          About Me',
    '🌏  <span class="command">social</span>         Display social networks',
    '🏗  <span class="command">projects</span>       View coding projects',
    '📧  <span class="command">email</span>          Reach me through email',
    '🧹  <span class="command">clear</span>          Clear the terminal',
    '❓  <span class="command">help</span>           Open the help menu',
    '🕰  <span class="command">history</span>        View command history',
    '🇮🇳  <span class="command">banner</span>         Display the header',
    '👋  <span class="command">exit</span>           Close the tab and exit',
    "<br>",
];

// Social
social = [
    "<br>",
    "Enter the name of any of the following or simply click the links...",
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/yashnthakre' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/thakreyn' + "</a>",
    'instagram      <a href="' + instagram + '" target="_blank">instagram/yash.nthakre' + '</a>',
    'leetcode       <a href="' + leetcode + '" target="_blank">leetcode/thakreyn' + '</a>',
    'resume         <a href="' + resume + '" target="_blank">resume link' + '</a>',
    'spotify        <a href="' + spotify + '" target="_blank">spotify/YashThakre' + '</a>',
    "<br>"
];

// Projects (Needs Work)
projects = [
    "<br>",
    // 1st project
    '<span class="command">1. eRx : E-Prescription App</span>',
    '<br>',
    'ERX is a unified platform for standardizing prescriptions in India. (Official entry for Google Solution ',
    'Challenge 2022 and Smart India Hackathon) It is a Full stack end to end solution for doctors, ',
    'patients and pharmacists to allow easy transaction of prescriptions and reduce misinterpretation', 
    'and mishandling. It utilizes technologies like Flutter, Firebase and Express to create a complete',
    'ecosystem for handling prescriptions.',
    '<br>',
    'Click the following links to know more: <a href = "" target="_blank">(Github)</a> | <a href = "" target="_blank">(Youtube)</a>',
    "<br>",
    // 2nd Project
    '<span class="command">2. Drive Sink</span>',
    '<br>',
    'Drive sink is a CLI based tool that allows the user to synchronize their local files and directories',
    'with their personal Google Drives. Drive sink offers git like commands to simply sync the files',
    'on the drive using the Google Drive API. It also ensures that there is no overwriting of files on the drive', 
    'and keeps track of the changes in files so that only the needed files are synchronized.',
    '<br>',
    'Click the following links to know more: <a href = "https://github.com/thakreyn/drive-sink" target="_blank">(Github)</a>',
    "<br>",
    // 3rd project
    '<span class="command">3. Shopping Assistant for Visually Impaired</span>',
    '<br>',
    '`Be My Eyes` is a research project and a full stack system that aims to enhance the shopping experience',
    'of the visually impaired people. This is done with the help of a mobile application that scans QR codes',
    '(which are of 2 types) placed around the store, retrieves the information from the server and then uses Text-to-Speech',
    'to convey it to the user. The app is based on Flutter and uses a ExpressJS backend server with a MongoDB Atlas database.',
    '<br>',
    'Click the following links to know more: <a href = "https://github.com/thakreyn/qr-shopping-app" target="_blank">Frontend : (Github)</a> | <a href = "https://github.com/thakreyn/qr-backend" target="_blank">Backend : (Github)</a>',
    "<br>",
    // 4th project
    '<span class="command">4. Portfolio Management Dashboard</span>',
    '<br>',
    'This is a web based dashboard tool that allows the user to track their investment portfolio. It is based on',
    'Flask backend and uses MongoDB to store the different asset information. The dashboard provides and tabular and', 
    'graphical representation for all the classes to provide valuable information at a glance.',
    '<br>',
    'Click the following links to know more: <a href = "https://github.com/thakreyn/dbms-project-portfolio-dashboard" target="_blank">(Github)</a>',
    "<br>",
];



