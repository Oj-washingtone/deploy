const { exec } = require('child_process');

const folderPath = '/path/to/your/folder';

exec(`xdg-open "${folderPath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening folder: ${error}`);
    return;
  }
  console.log(`Opened folder: ${folderPath}`);
});
