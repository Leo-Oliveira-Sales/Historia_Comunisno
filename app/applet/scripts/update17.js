const fs = require('fs');

// 1. Update academicChaptersDatabase.ts
let chaptersCode = fs.readFileSync('src/data/academicChaptersDatabase.ts', 'utf8');

if (!chaptersCode.includes("import { CHAPTER_17 } from './chapters/chapter_17';")) {
  chaptersCode = chaptersCode.replace(
    "import { CHAPTER_16 } from './chapters/chapter_16';",
    "import { CHAPTER_16 } from './chapters/chapter_16';\nimport { CHAPTER_17 } from './chapters/chapter_17';"
  );
}

const startCh17 = chaptersCode.indexOf('  17: {');
const startCh18 = chaptersCode.indexOf('  18: {');

if (startCh17 !== -1 && startCh18 !== -1) {
  const before = chaptersCode.slice(0, startCh17);
  const after = chaptersCode.slice(startCh18);
  chaptersCode = before + '  17: CHAPTER_17,\n\n' + after;
  fs.writeFileSync('src/data/academicChaptersDatabase.ts', chaptersCode, 'utf8');
  console.log('Updated academicChaptersDatabase.ts!');
} else {
  console.error('Could not find 17 or 18 in chapters DB', startCh17, startCh18);
}

// 2. Update researchDossiersDatabase.ts
let dossiersCode = fs.readFileSync('src/data/researchDossiersDatabase.ts', 'utf8');

if (!dossiersCode.includes("import { DOSSIER_17_TEXT } from './dossiers/dossier_17';")) {
  dossiersCode = dossiersCode.replace(
    "import { DOSSIER_16_TEXT } from './dossiers/dossier_16';",
    "import { DOSSIER_16_TEXT } from './dossiers/dossier_16';\nimport { DOSSIER_17_TEXT } from './dossiers/dossier_17';"
  );
}

const startDos17 = dossiersCode.indexOf('  17: ');
const startDos18 = dossiersCode.indexOf('  18: ');

if (startDos17 !== -1 && startDos18 !== -1) {
  const before = dossiersCode.slice(0, startDos17);
  const after = dossiersCode.slice(startDos18);
  dossiersCode = before + '  17: DOSSIER_17_TEXT,\n\n' + after;
  fs.writeFileSync('src/data/researchDossiersDatabase.ts', dossiersCode, 'utf8');
  console.log('Updated researchDossiersDatabase.ts!');
} else {
  console.error('Indices not found for dossiers DB:', startDos17, startDos18);
}
