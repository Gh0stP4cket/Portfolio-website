/*
  Achievements data — shared between index.html (featured achievements strip)
  and achievements.html (full filterable list).

  Fields:
    title       string  — name of the achievement/award/certification
    date        string  — e.g. "Jun 2026"
    category    string  — one of: "Academic", "Competition", "Leadership",
                            "Certification", "Project" (used for filter pills)
    description string  — 1-3 sentence summary
    tags        array   — short keyword chips shown on the card
    link        string  — optional URL ("" if none) e.g. certificate/verify link
    featured    bool    — show on homepage strip

  >>> PLACEHOLDER CONTENT — replace title/date/description/tags/link with the
  >>> real details for each achievement, remove any entries that don't apply,
  >>> and add new keys (then list them in achievementOrder below) for anything
  >>> missing.
*/

window.achievements = {
  'road-to-ctf-advance': {
    title: "ROAD-TO-CTF Advanced",
    date: "2026-07-19",
    category: "CyberSecurity",
    description:
      "Participated in the ROAD-TO-CTF Advanced event, a cybersecurity competition that tested skills in web security, cryptography, and reverse engineering. Successfully solved multiple challenges and gained hands-on experience in ethical hacking.",
    tags: ["Cybersecurity", "CTF"],
    image: "img/cert/ctf-adv.jpg",
    link: "",
    featured: true
  },
  'road-to-ctf-beginning': {
    title: "ROAD-TO-CTF Beginning",
    date: "2026-07-11",
    category: "CyberSecurity",
    description:
      "Participated in the ROAD-TO-CTF Beginning event, a cybersecurity competition designed for newcomers to the field. Gained foundational knowledge in web security, cryptography, and reverse engineering.",
    tags: ["Cybersecurity", "CTF"],
    image: "img/cert/ctf-begin.jpg",
    link: "",
    featured: true
  },
  'basic-cybersecurity': {
    title: "Certified in Basic Cybersecurity",
    date: "2026-06-23",
    category: "CyberSecurity",
    description:
      "Completed the Basic Cybersecurity course, gaining fundamental knowledge in web security, cryptography, and reverse engineering.",
    tags: ["Cybersecurity"],
    image: "img/cert/basic-cyber.png",
    link: "",
    featured: true
  },
  'rmutl-python-competition': {
    title: "Participated in National Engineering Academic Contest",
    date: "2026-08-14",
    category: "Academic",
    description:
      "Participated in the 17th National Engineering Academic Contest in the Computer Programming competition using Python, held at Rajamangala University of Technology Isan, Nakhon Ratchasima.",
    tags: ["Python", "Programming", "Competition"],
    image: "img/cert/python-RMUTNREAC.png",
    link: "",
    featured: true
  },
  'cyber-bootcamp-2026': { 
    title: "Completed Cybersecurity Boot Camp Program", 
    date: "2026-08-21", 
    category: "CyberSecurity", 
    description: "Successfully completed the Cybersecurity Boot Camp 2026 program at Rajamangala University of Technology Lanna, fulfilling all requirements of the program.", 
    tags: ["Cybersecurity", "Cyber Boot Camp", "Academic"], 
    image: "img/cert/cyber-boot-camp.jpg", 
    link: "", 
    featured: true },
  'cyber-hero-2026': { 
    title: "Participated in Cyber Hero 2026", 
    date: "2026-09-12", 
    category: "CyberSecurity", 
    description: "Jeopardy-style CTF featuring Miscellaneous, Blue Team, and Red Team cybersecurity challenges with write-ups submissions.",
    tags: ["Cybersecurity", "CTF"], 
    image: "img/cert/cyber-hero.png", 
    link: "", 
    featured: true },
  'holmes-2026': { 
    title: "Participated in Holmes CTF 2026: The Reichenbach Directive, blue team scenarios", 
    date: "2026-09-21", 
    category: "CyberSecurity", 
    description: "Participated in Holmes CTF 2026: The Reichenbach Directive, completing blue-team cybersecurity scenarios focused on digital forensics, incident investigation, and analyzing evidence to identify and respond to security incidents.", 
    tags: ["Cybersecurity", "CTF"], 
    image: "img/cert/holmes2026.png", 
    link: "", 
    featured: true },
  'Byte-Me-2026': { 
    title: "Participated in ByteMe CTF 2026", 
    date: "2026-10-09", 
    category: "CyberSecurity", 
    description: "A hybrid Jeopardy-style Capture The Flag competition organized by OWASP PCCOE and the Department of Computer Engineering, PCCOE, Pune", 
    tags: ["Cybersecurity", "CTF"], 
    image: "img/cert/byteme-ctf-2026.png", 
    link: "", 
    featured: true },
  'deadface-participate-2026': { 
    title: "Participated in DEADFACECTF 2026", 
    date: "2026-10-17", 
    category: "CyberSecurity",
    description: "Participated in DEADFACE CTF 2026, a jeopardy-style cybersecurity competition hosted by Cyber Hacktics. Tackled hands-on challenges across multiple cybersecurity domains, including cryptography, digital forensics, memory analysis, network traffic investigation, and reverse engineering.",
    tags: ["Cybersecurity", "CTF"], 
    image: "img/cert/deadface-participate-2026.png", 
    link: "", 
    featured: true },
  'deadface-writeups-2026': { 
    title: "Writeups in DEADFACE CTF 2026", 
    date: "2026-10-17", 
    category: "CyberSecurity", 
    description: "Documented solutions to DEADFACE CTF 2026 challenges through technical writeups, detailing the tools, investigation techniques, and step-by-step approaches used to solve challenges in cryptography, digital forensics, memory analysis, and other cybersecurity domains. These writeups showcase practical problem-solving skills and provide learning resources for other cybersecurity enthusiasts.", 
    tags: ["Cybersecurity", "CTF"], 
    image: "img/cert/deadface-writeup-2026.png", 
    link: "", 
    featured: true },
};

window.achievementOrder = [
  "road-to-ctf-advance",
  "road-to-ctf-beginning",
  "basic-cybersecurity",
  "rmutl-python-competition",
  "cyber-bootcamp-2026",
  "cyber-hero-2026",
  "holmes-2026",
  'Byte-Me-2026',
  'deadface-participate-2026',
  'deadface-writeups-2026',
];