const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

const ORIG_PKG_PATH = path.resolve(__dirname, '../packages/typography-theme-uxworks/package.json');
const pkgData = require(ORIG_PKG_PATH);

function deleteKey(pkg, key) {
  delete pkg[key];
}

const toRemoveKeys = ['dependencies', 'scripts', 'jest', 'devDependencies']
toRemoveKeys.forEach((element) => {
  deleteKey(pkgData, element)
})

try {
  pkgData["main"] = "index.js";
  console.log(chalk.green('Successfully changed entrypoint of package'));
} catch(err) {
  console.log(chalk.red(err));
}

try {
  fs.writeFileSync(ORIG_PKG_PATH, JSON.stringify(pkgData, null, 2), { mode: 0o755})
  console.log(chalk.green('Successfully trimed the package.json'));
} catch(err) {
  console.log(chalk.red(err));
}
