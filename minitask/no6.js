import fs from 'fs/promises';
import readline from 'readline/promises';
import path, { join } from 'path';
import consola from 'consola';
import { fileURLToPath } from 'url';

// define file name and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// view files in directory
async function viewFiles() {
  try {
    const files = await fs.readdir(__dirname);
    if (files.length === 0) {
      consola.info('No files found in the directory.');
    } else {
      consola.info('Files in the directory:');
      files.forEach((file) => consola.log(`- ${file}`));
    }
  } catch (err) {
    consola.error('Error: cannot read directory', err);
  }
}

// add new file
async function addFile() {
  try {
    const fileName = await rl.question('Enter name of the new file: ');
    const filePath = join(__dirname, fileName);

    await fs.writeFile(filePath, '');
    consola.success(`File "${fileName}" has been created`);
  } catch (err) {
    consola.error('Error has occured during creating file', err);
  }
} 

// remove file
async function deleteFile() {
  try {
    const fileName = await rl.question('Enter name of the file you want to delete: ');
    const filePath = join(__dirname, fileName);

    await fs.unlink(filePath);
    consola.success(`File "${fileName}" has been deleted.`);
  } catch (err) {
    consola.error('Error has occured during deleting file', err);
  }
}

async function optionToDo() {
  let running = true;
  while (running) {
    consola.info(`
Choose an option:
1. View Files
2. Add File
3. Remove File
`);
    const choice = await rl.question('Enter your choice (1-3): ');
    switch (choice) {
      case '1':
        await viewFiles();
        break;
      case '2':
        await addFile();
        break;
      case '3':
        await deleteFile();
        break;
      default:
        consola.warn('Please enter only 1-3.');
    }
  }
  rl.close();
}
export default optionToDo
