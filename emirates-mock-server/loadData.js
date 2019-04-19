/* eslint-disable security/detect-non-literal-fs-filename */
const normalizedPath = require('path').join(__dirname, 'data');

const fileList = require('fs')
  .readdirSync(normalizedPath)
  .map(function(file) {
    return file.split('.')[0];
  });

module.exports = fileList;
