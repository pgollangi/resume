const fetch = require("node-fetch");
const fs = require('fs');

async function fetchResume() {
    var gists = await fetch('https://api.github.com/users/pgollangi/gists').then(r => r.json());
    const resumeGist = gists.find(g => g.files['resume.json']);
    var resume = await fetch(resumeGist.files['resume.json'].raw_url)
        .then(r => r.json());
    fs.writeFileSync('resume.json',JSON.stringify(resume));
}




fetchResume();
