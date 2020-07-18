const generateContributing = contributingText => {
  if (!contributingText) {
      return '';
  }
  return `
      ${contributingText}
  `
}

// function to generate markdown for README
const generateMarkdown = data => {
  return `
  #${data.title}
  
  ##Description
  ${data.description}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Contributing
  ${generateContributing(contributing)}

  ##Tests
  ${data.tests}

  ##Questions
  For questions, please contact me at: **github.com/${data.github}**, or via email at: **${data.email}**.
`;
}

module.exports = generateMarkdown;
