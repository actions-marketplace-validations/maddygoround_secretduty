const core = require("@actions/core");
const finder = require("./find-python");
// const finderPyPy = require("./find-pypy");
const path = require("path");
const os = require("os");
// const { getCacheDistributor } = require("./cache-distributions/cache-factory");
// const { isCacheFeatureAvailable } = require("./utils");


function isPyPyVersion(versionSpec) {
  return versionSpec.startsWith("pypy-");
}

// async function cacheDependencies(cache, pythonVersion) {
//   const cacheDependencyPath =
//     core.getInput("cache-dependency-path") || undefined;
//   const cacheDistributor = getCacheDistributor(
//     cache,
//     pythonVersion,
//     cacheDependencyPath
//   );
//   await cacheDistributor.restoreCache();
// }

// async function run() {
//   if (process.env.AGENT_TOOLSDIRECTORY?.trim()) {
//     core.debug(
//       `Python is expected to be installed into AGENT_TOOLSDIRECTORY=${process.env['AGENT_TOOLSDIRECTORY']}`
//     );
//     process.env['RUNNER_TOOL_CACHE'] = process.env['AGENT_TOOLSDIRECTORY'];
//   } else {
//     core.debug(
//       `Python is expected to be installed into RUNNER_TOOL_CACHE==${process.env['RUNNER_TOOL_CACHE']}`
//     );
//   }
//   try {
//     const version = core.getInput('python-version');
//     if (version) {
//       let pythonVersion;
//       const arch = core.getInput('architecture') || os.arch();
//       if (isPyPyVersion(version)) {
//         const installed = await finderPyPy.findPyPyVersion(version, arch);
//         pythonVersion = `${installed.resolvedPyPyVersion}-${installed.resolvedPythonVersion}`;
//         core.info(
//           `Successfully set up PyPy ${installed.resolvedPyPyVersion} with Python (${installed.resolvedPythonVersion})`
//         );
//       } else {
//         const installed = await finder.useCpythonVersion(version, arch);
//         pythonVersion = installed.version;
//         core.info(`Successfully set up ${installed.impl} (${pythonVersion})`);
//       }

//       const cache = core.getInput('cache');
//       if (cache && isCacheFeatureAvailable()) {
//         await cacheDependencies(cache, pythonVersion);
//       }
//     } else {
//       core.warning(
//         'The `python-version` input is not set.  The version of Python currently in `PATH` will be used.'
//       );
//     }
//     const matchersPath = path.join(__dirname, '../..', '.github');
//     core.info(`##[add-matcher]${path.join(matchersPath, 'python.json')}`);
//   } catch (err) {
//     core.setFailed((err).message);
//   }
// }

// run();

const  setupPython = async (pythonVersion) => {
  const arch = os.arch();
//   if (isPyPyVersion(pythonVersion)) {
//     const installed = await finderPyPy.findPyPyVersion(version, arch);
//     pythonVersion = `${installed.resolvedPyPyVersion}-${installed.resolvedPythonVersion}`;
//     core.info(
//       `Successfully set up PyPy ${installed.resolvedPyPyVersion} with Python (${installed.resolvedPythonVersion})`
//     );
//   } else {
    const installed = await finder.useCpythonVersion(pythonVersion, arch);
    pythonVersion = installed.version;
    core.info(`Successfully set up ${installed.impl} (${pythonVersion})`);
 // }
//   const cache = core.getInput("cache");
//   if (cache && isCacheFeatureAvailable()) {
//     await cacheDependencies(cache, pythonVersion);
//   }
};

module.exports = {
    setupPython
}
