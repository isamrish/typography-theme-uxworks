const fs = require("fs-extra")
const chalk = require("chalk")

try {
  fs.removeSync('./dist/');
  console.log(chalk.red("Successfully Deleted"))
} catch(err) {
  console.log(chalk.red(`Error : ${err}`));
}
