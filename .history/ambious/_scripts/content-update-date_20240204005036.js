const fs = require('fs');

const [ , ,env] = process.argv;

const filePath = `./src/${env}/data/content.json`;

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file:\n ${err}`);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Update the "updatedAt" field with the current time
        jsonData.updatedAt = new Date().toISOString();

        // Convert the updated data back to JSON
        const updatedJson = JSON.stringify(jsonData, null, 2);

        // Write the updated JSON back to the file
        fs.writeFile(filePath, updatedJson, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
                return;
            }

            console.log(`"${filePath}" updated successfully.`);
        });
    } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError}`);
    }
});
