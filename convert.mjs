import sharp from 'sharp';

await sharp('images/logo.jpeg').webp({ quality: 90 }).toFile('images/logo.webp');
console.log('logo.webp ok');

await sharp('images/sublogo.PNG').webp({ quality: 90 }).toFile('images/sublogo.webp');
console.log('sublogo.webp ok');
