import * as fs from 'fs';

const getConfig = () => {
  const packages = JSON.parse(fs.readFileSync('package.json') as any);

  return {
    version: packages.version as string,
    workspaces: packages.workspaces.map((workspace: string) => workspace.slice(0, -2)) as string[],
  };
};

export default getConfig;
