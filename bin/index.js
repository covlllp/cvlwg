var ncp = require('ncp').ncp;
var path = require('path');

ncp.limit = 16;

var currentDirectory = process.cwd();
var generatedDirectory = path.join(__dirname, 'generated');

function copyFiles(cb) {
  ncp(getGeneratedDirectory(), getCurrentDirectory(), cb);
}

copyFiles(function() {
  console.log('All done!');
});
