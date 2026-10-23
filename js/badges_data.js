/*
  Badges data — shared between index.html (featured badges strip)
  and badge.html (full list with details).

  These are Open Badges 3.0 credentials issued through CredForge. The raw
  signed credential for each one lives in js/Badges/<file>.json.

  Fields:
    name        string  — badge title
    issuer      string  — organisation that issued it
    issuerUrl   string  — issuer website
    date        string  — ISO date the badge was issued (drives the NEW chip)
    category    string  — used for the filter pills on badge.html
    description string  — what the badge recognises
    criteria    string  — what had to be done to earn it
    tags        array   — short keyword chips
    image       string  — badge artwork
    certificate string  — optional full certificate image
    verify      string  — public verification URL ("" if none)
    json        string  — local copy of the signed Open Badges credential
    evidence    string  — optional link to the work that backs the badge
    featured    bool    — show on the homepage strip

  To add a badge: drop the artwork in img/badges/, the credential JSON in
  js/Badges/, add an entry below, then list its key in badgeOrder.
*/

window.badges = {
  'deadface-ctf-2026-writeup': {
    name: "DEADFACE CTF 2026 Writeup",
    issuer: "Cyber Hacktics",
    issuerUrl: "https://cyberhacktics.org",
    date: "2026-10-19",
    category: "Write-up",
    description:
      "Recognizes participants who contribute to the cybersecurity learning community by documenting their solutions to DEADFACE CTF 2026 challenges. Celebrates technical knowledge sharing, clear communication, and the ability to explain cybersecurity concepts and exploitation techniques.",
    criteria:
      "Create and submit an original, technically accurate write-up explaining the methodology, tools, and steps used to solve at least one DEADFACE CTF 2026 challenge. The submission must be accepted by the organizing team.",
    tags: ["Cybersecurity", "CTF", "Write-up"],
    image: "img/badges/deadface-ctf-2026-writeup.png",
    certificate: "img/cert/deadface-writeup-2026.png",
    verify: "https://credforge.app/credentials/f983e7f2-5db4-4c8f-9e9d-699e5dd006d0",
    json: "js/Badges/deadface-ctf-2026-writeup.json",
    evidence: "https://github.com/Gh0stP4cket/deadface-2026-writeups",
    featured: true
  },
  'deadface-ctf-2026-competitor': {
    name: "DEADFACE CTF 2026 Competitor",
    issuer: "Cyber Hacktics",
    issuerUrl: "https://cyberhacktics.org",
    date: "2026-10-18",
    category: "Competition",
    description:
      "Awarded to participants of DEADFACE CTF 2026: Operation Kingmaker. Recognizes curiosity, determination, and technical problem-solving skills while competing in cybersecurity challenges across a variety of disciplines.",
    criteria:
      "Register for DEADFACE CTF 2026 and actively participate in the competition by attempting or successfully solving at least one challenge.",
    tags: ["Cybersecurity", "CTF", "Competition"],
    image: "img/badges/deadface-ctf-2026-competitor.png",
    certificate: "img/cert/deadface-participate-2026.png",
    verify: "https://credforge.app/credentials/bf7fbaf6-dcf4-418c-8649-4d4cf85f68f7",
    json: "js/Badges/deadface-ctf-2026-competitor.json",
    evidence: "",
    featured: true
  }
};

window.badgeOrder = [
  'deadface-ctf-2026-writeup',
  'deadface-ctf-2026-competitor'
];
