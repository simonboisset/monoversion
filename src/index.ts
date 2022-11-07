import getConfig from './getConfig';
import getNextVersion from './getNextVersion';
import updatePackage from './updatePackage';
import visitWorspace from './visitWorspace';

export const version = async () => {
  const [scope, mode] = process.argv.slice(2);
  const { version, workspaces } = getConfig();
  const nextVersion = getNextVersion(version, mode) || version;
  updatePackage(scope, '.', nextVersion);
  for (const workspace of workspaces) {
    visitWorspace(scope, workspace, nextVersion);
  }
};
