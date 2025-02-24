import fs from 'fs/promises';
import readline from 'readline/promises';
import { join } from 'path';
import consola from 'consola';

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const folderPath = join(process.cwd(), 'folder'); // Directory path

// Function to list files
async function listFiles() {
  try {
    const files = await fs.readdir(folderPath);
    if (files.length === 0) {
      consola.warn('The folder is empty.');
      return null;
    }

    consola.info('📁 Available files:');
    files.forEach((file, index) => consola.log(`${index + 1}. ${file}`));
    return files;
  } catch (err) {
    consola.error('❌ Error reading folder:', err);
    return null;
  }
}

// Function to open and display file content
async function openFile(files) {
  try {
    const choice = await rl.question('Select a file number to open: ');
    const index = parseInt(choice, 10) - 1;

    if (isNaN(index) || index < 0 || index >= files.length) {
      consola.warn('❌ Invalid file selection.');
      return;
    }

    const filePath = join(folderPath, files[index]);
    const content = await fs.readFile(filePath, 'utf-8');
    consola.success(`📄 Content of "${files[index]}":\n\n${content}`);

    // Ask if the user wants to edit the file
    const shouldEdit = await rl.question('Do you want to edit this file? (yes/no): ');
    if (shouldEdit.toLowerCase() === 'yes') {
      await editFile(filePath, content);
    }
  } catch (err) {
    consola.error('❌ Error reading the file:', err);
  }
}

// Function to edit and save changes to the file
async function editFile(filePath, currentContent) {
  try {
    consola.info('📝 Enter the new content (leave empty to keep existing content):');
    const newContent = await rl.question('> ');

    // If input is empty, keep existing content
    const finalContent = newContent.trim() === '' ? currentContent : newContent;

    // Write changes to the file
    await fs.writeFile(filePath, finalContent, 'utf-8');
    consola.success('✅ File has been updated successfully!');
  } catch (err) {
    consola.error('❌ Error editing the file:', err);
  }
}

// Main function to run the program
async function runProgram() {
  const files = await listFiles();
  if (files) {
    await openFile(files);
  }
  rl.close();
}

runProgram();
