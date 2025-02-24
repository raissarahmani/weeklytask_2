import fs from 'fs/promises';
import readline from 'readline/promises';
import { join } from 'path';
import consola from 'consola';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const weeklyTask = join(process.cwd(), './minitask'); 
async function listFiles() {
  try {
    const files = await fs.readdir(weeklyTask);
    if (files.length === 0) {
      consola.info('The folder is empty.');
      return null;
    }

    consola.info('Available files:');
    files.forEach((file, index) => consola.log(`${index + 1}. ${file}`));
    return files;
  } catch (err) {
    consola.error('Error occured while reading minitask', err);
    return null;
  }
}

async function openFile(files) {
  try {
    const choice = await rl.question('Select a file number to open: ');
    const index = parseInt(choice, 10) - 1;

    if (typeof index !== "number" || index < 0 || index >= files.length) {
      consola.warn('Invalid file selection.');
      return;
    }

    const filePath = join(weeklyTask, files[index]);
    const content = await fs.readFile(filePath, 'utf-8');
    consola.success(`Content of "${files[index]}":\n\n${content}`);

    const shouldEdit = await rl.question('Do you want to edit this file? (yes/no): ');
    if (shouldEdit.toLowerCase() === 'yes') {
      await editFile(filePath, content);
    }
  } catch (err) {
    consola.error('Error reading the file:', err);
  }
}

async function editFile(filePath, currentContent) {
    try {
      consola.info('Enter input: ');
      const newContent = await rl.question('> ');
  
      const finalContent = newContent.trim() === '' ? currentContent : newContent;

      await fs.writeFile(filePath, finalContent, 'utf-8');
      consola.success('File has been updated successfully!');
    } catch (err) {
      consola.error('Error occured while inputing value', err);
    }
  }

async function runProgram() {
  const files = await listFiles();
  if (files) {
    await openFile(files);
  }
  rl.close();
}

runProgram();
