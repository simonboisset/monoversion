import * as fs from 'fs';
import * as path from 'path';
import updatePackage from './updatePackage';

const visitWorspace = (scope: string, dir: string, version: string) => {
  const files = fs.readdirSync(dir);
  for (let filename of files) {
    const file = path.resolve(dir, filename);
    const stat = fs.lstatSync(file);

    if (stat.isDirectory()) {
      updatePackage(scope, file, version);
    }
  }
  return files;
};

export default visitWorspace;
