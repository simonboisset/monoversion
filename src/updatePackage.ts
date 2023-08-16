import * as fs from 'fs';
import * as path from 'path';
import prettier from 'prettier';

const updatePackage = async(scope: string, dir: string, version: string) => {
  const file = path.join(dir, 'package.json');
  let packages = JSON.parse(fs.readFileSync(file) as any);
  packages.version = version;
  for (const dependency in packages.dependencies) {
    if (dependency.includes(scope)) {
      packages.dependencies[dependency] = version;
    }
  }
  for (const devDependency in packages.devDependencies) {
    if (devDependency.includes(scope)) {
      packages.devDependencies[devDependency] = version;
    }
  }
const data = await  prettier.format(JSON.stringify(packages), { parser: 'json', printWidth: 1 })
  fs.writeFileSync(file,data);
};

export default updatePackage;
