const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== Building esp-web-tools ===');

// 1. Build TypeScript
console.log('Step 1: Building TypeScript...');
try {
  execSync('npx tsc', { stdio: 'inherit' });
  console.log('✅ TypeScript build successful');
} catch (error) {
  console.error('❌ TypeScript build failed');
  process.exit(1);
}

// 2. Build với Rollup
console.log('\nStep 2: Optimizing with Rollup...');
try {
  // Set production mode
  process.env.NODE_ENV = 'production';
  execSync('npx rollup -c rollup.web.config.js', { stdio: 'inherit' });
  console.log('✅ Rollup build successful');
} catch (error) {
  console.error('❌ Rollup build failed');
  process.exit(1);
}

// 3. Kiểm tra file output
const outputFile = path.join('dist', 'web', 'install-button.js');
if (fs.existsSync(outputFile)) {
  const stats = fs.statSync(outputFile);
  const fileSize = (stats.size / 1024).toFixed(2);
  console.log(`\n✅ Build completed!`);
  console.log(`📁 File: ${outputFile}`);
  console.log(`📊 Size: ${fileSize} KB`);
} else {
  console.error('❌ Output file not found');
}