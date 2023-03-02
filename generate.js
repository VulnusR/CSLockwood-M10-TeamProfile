const fs = require('fs');
const path = require('path');
const { generateEmployeeCards } = require('./index.js');


const fileName = 'output.html';

// Read the contents of the index.html file
fs.readFile(path.join(__dirname, 'dist', 'index.html'), 'utf8', (err, data) => {
    if (err) throw err;

  // Modify the contents of the file with the generated employee cards
  const modifiedData = data.replace('<section id="sectionsparent"></section>', generateEmployeeCards());

  // Write the modified contents to a new file
  fs.writeFile(fileName, modifiedData, (err) => {
    if (err) throw err;

    console.log(`Successfully wrote ${fileName}`);
  });
});