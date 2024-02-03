const fs = require('fs-extra');

// Check if source and target folders are provided as command line arguments
const [,, sourceFolder, targetFolder] = process.argv;

if (!sourceFolder || !targetFolder) {
    console.error('Usage: node script.js <sourceFolder> <targetFolder>');
    process.exit(1);
}

// Use fs-extra's copy function to recursively copy the contents of the source folder to the target folder
fs.copy(`./${sourceFolder}`, `./${targetFolder}`, { overwrite: true }, (err) => {
    if (err) {
        console.error(`Error copying files: ${err}`);
    } else {
        console.log(`Files copied from ${sourceFolder} to ${targetFolder} successfully.`);
    }
});
