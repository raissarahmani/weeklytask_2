import fs from 'fs/promises';
import readline from 'readline/promises';
import path, { join } from 'path';
import consola from 'consola';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function viewFiles() {
  try {
    const files = await fs.readdir(__dirname);
    if (files.length === 0) {
      consola.info('No files found in the directory.');
    } else {
      consola.success('Files in the directory:');
      files.forEach((file) => consola.log(`- ${file}`));
    }
  } catch (err) {
    consola.error('Error reading directory:', err);
  }
}

async function addFile() {
  try {
    const fileName = await rl.question('Enter the name of the new file (with extension): ');
    const fileContent = await rl.question('Enter the content for the file: ');
    const filePath = join(__dirname, fileName);

    await fs.writeFile(filePath, fileContent);
    consola.success(`File "${fileName}" has been created.`);
  } catch (err) {
    consola.error('Error creating file:', err);
  }
}

async function removeFile() {
  try {
    const fileName = await rl.question('Enter the name of the file to delete: ');
    const filePath = join(__dirname, fileName);

    await fs.unlink(filePath);
    consola.success(`File "${fileName}" has been deleted.`);
  } catch (err) {
    consola.error('Error deleting file (maybe file not found):', err);
  }
}

async function main() {
  let running = true;
  while (running) {
    consola.info('\n Choose an option:\n 1. View Files\n 2. Add File\n 3. Remove File\n 4. Exit');
    const choice = await rl.question('Enter your choice (1-4): ');

    switch (choice) {
      case '1':
        await viewFiles();
        break;
      case '2':
        await addFile();
        break;
      case '3':
        await removeFile();
        break;
      case '4':
        consola.success('Exiting the program.');
        running = false;
        break;
      default:
        consola.warn('Invalid choice, please enter 1-4.');
    }
  }

  rl.close();
}

main();
