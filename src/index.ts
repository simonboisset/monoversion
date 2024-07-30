import getConfig from "./getConfig";
import getNextVersion from "./getNextVersion";
import updatePackage from "./updatePackage";
import visitWorspace from "./visitWorspace";

export const version = async () => {
  const [scope, mode, overrideDependencies] = process.argv.slice(2) as [
    string,
    "major" | "minor" | "patch",
    "true" | "false" | undefined,
  ];
  const { version, workspaces } = getConfig();
  const nextVersion = getNextVersion(version, mode) || version;
  await updatePackage(scope, ".", nextVersion, overrideDependencies === "true");
  for (const workspace of workspaces) {
    visitWorspace(
      scope,
      workspace,
      nextVersion,
      overrideDependencies === "true",
    );
  }
};
