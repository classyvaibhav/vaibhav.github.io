
var commandsInfo = {
      "help": "Shows list of implemented commands or info about a specific command.",
      "clear": "Clears the screen.",
      "skills": "Shows a list of my skills.",
      "experience": "Shows a list of my working experience.",
      "education": "Shows a list of my education information.",
      "projects": "Shows a list of projects that I'm working on currently.",
      "aboutme": "Shows a short summary about me.",
      "interests": "Shows a list of my interests.",
      "contact": "Let's get in touch.",
      "resume": "Shows a link to my PDF Résumé."
};

/* Resume information*/

var skillsInfo = "• Embedded C Programming\n" +
  "• MATLAB\n" +
  "• Circuit Design using Proteus and KiCad\n" +
  "• PCB Design\n" +
  "• Communication Protocols\n" +
  "• Git\n" +
  "• Linux\n" +
  "• Operating Systems concepts\n" +
  "• Basic networking concepts\n" +
  "• Basic web scraping knowledge\n" +
  "• Basic web development (HTML, CSS, JS, PHP)\n" +
  "• Strong problem-solving and debugging skills\n" +
  "• Creativity and ability to learn quickly\n" +
  "• Exceptional communication\n" +
  "• Successful working in a team environment, as well as independently\n" +
  "• The ability to work under pressure and multi-task\n" +
  "• The ability to follow instructions and deliver quality results\n" +
  "• The ability to quickly come up to speed on a new project\n";


var experienceInfo = 
"Dec 2022 - Present\n" +
"President | SPARK CLUB, MIT Academy of Engineering\n" +
"• Organized various tech workshops and events for students under Spark Club.\n" +
"• Coordinated events to enhance technical skills and awareness in the college community.\n" +

"\nApr 2024\n" +
"Team Lead | TechnoPHILIA 2024\n" +
"• Led a national-level project competition and poster presentation event.\n" +
"• Managed a team to successfully execute the event, attracting participants from across the country.\n" +

"\nSep 2019 - Jun 2022\n" +
"Cultural Head | Government Polytechnic\n" +
"• Led the cultural committee in organizing and managing various events at the institute level.\n";


var educationInfo = 
"2016 Master's degree - Computer Engineer\n" +
"Faculty of Electrical Engineering Osijek\n" +
"Notable courses:\n" +
"Computer Architecture, Computer Networks, Programming in C/C++, Operating Systems, Web programming and Real-time Computer Systems\n" +
"Graduation paper:\n" +
"Transport protocol Stream Control Transmission Protocol (SCTP) in distributed  application development\n" +


"\n2010 High School Diploma – Electronics technician\n" +
"Electrical Engineering and Traffic School Osijek\n" +
"Notable classes:\n" +
"Digital electronics, C Programming, Intro to Microprocessors, Robotics\n" +
"Graduation paper:\n" +
"Laser beam amplitude modulation\n" +
"Electronics projects where sound from an mp3 player was sent over a laser beam to a photoresistor which was connected to an amplifier and a speaker\n";


var projectsInfo = {
  "Real Time Implementation of CAN Protocol": "#",
  "Warehouse Management System Using CC-link Protocol Devices and STM32": "#",
  "IOT Based Industrial Automation": "#",
  "Weapon Detection and Alert System": "#",
  "IOT Based Air Quality Monitoring System": "#",
  "Face Recognition Based Attendance System Using ESP32 CAM": "#",
  "Automated Bottle Filling & Capping System (Diploma Project)": "#"
};

var aboutmeInfo = "A result-oriented Electronics & Telecommunication Engineering student from Pune, India, with a strong foundation in \n" +
  "Embedded C Programming, MATLAB, and Embedded Systems, along with demonstrated leadership skills through significant roles in \n" +
  "academic and extracurricular activities.\n" +
  "\n" +
  "Proactive learner with a passion for DIY electronics projects and exploring new technologies. Committed to applying theoretical \n" +
  "knowledge to practical applications, as evidenced by a range of academic projects, including Real Time Implementation of CAN Protocol, \n" +
  "IoT-Based Industrial Automation, and Automated Bottle Filling & Capping System.\n" +
  "\n" +
  "I actively engage in DIY electronics projects, always trying to build stuff from scratch, and I also prioritize eco-friendly living.\n";


var interestsInfo =
"• Software Development\n" +
"• Electronics  \n" +
"• Cyber Security\n" +
"• Ethical Hacking \n" +
"• Physics\n" +
"• Eastern Philosophy\n" +
"• Psychology \n" +
"• Everything DIY \n" +
"• Permaculture gardening\n" +
"• Cooking\n" +
"• Animal Welfare \n" +
"• Social Justice \n" +
"• Activism\n";

var contactInfo = [
  "email: <a href='mailto: Vaibhav.kawade@mitaoe.ac.in'>Vaibhav.kawade@mitaoe.ac.in</a><br/>",
  "phone: +91 9130601015 <br/>"
];


var specs =
"<pre>" +
"                   -`                    classyvaibhav@github\n" +
"                  .o+`                   OS: Microsoft Windows 11 Pro\n" +
"                 `ooo/                   Version: 23H2\n" +
"                `+oooo:                  Build Number: 22631\n" +
"               `+oooooo:                 Uptime: 20h 29m\n" +
"               -+oooooo+:                Resolution: 512x512\n" +
"             `/:-:++oooo+:               CPU: AMD Ryzen 5 7600X @ 6x 5.01GHz\n" +
"            `/++++/+++++++:              GPU: ASRock AMD Radeon RX 7600 XT Steel Legend 16GB OC\n" +
"           `/++++++++++++++:             Disk: 150G / 512G\n" +
"          `/+++ooooooooooooo/`           RAM: 16GB DDR5\n" +
"         ./ooosssso++osssssso+`          Manufacturer: ASUS\n" +
"        .oossssso-````/ossssss+`         Model: System Product Name\n" +
"       -osssssso.      :ssssssso.        BIOS: American Megatrends Inc. 1807\n" +
"      :osssssss/        osssso+++.\n" +
"     /ossssssss/        +ssssooo/-\n" +
"   `/ossssso+/:-        -:/+osssso+-\n" +
"  `+sso+:-`                 `.-/+oso:\n" +
" `++:.                           `-/+/\n" +
" .`                                 `"
"</pre>";


var files = {
  "/" : ["bin", "dev", "home", "lib64", "media", "opt", "root", "sbin", "sys", "usr", "boot", "etc", "lib", "lost+found", "mnt", "proc", "run", "srv", "tmp", "var"],
  "home" : ["feelqah"],
  "feelqah" : ["resume.sh"]
};
