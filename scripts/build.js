const { mkdirpSync, readJSONSync, writeJsonSync } = require('fs-extra');
const { findIana } = require('windows-iana');

const data = readJSONSync('./input/data.json');
mkdirpSync('./data');

Object.entries(data.DisplayNames).forEach(([locale, windowsNames]) => {
  const ianaNames = Object.entries(windowsNames).reduce(
    (acc, [windows, label]) => {
      const iana = findIana(windows)[0];
      return iana ? { ...acc, [iana]: label } : acc;
    },
    {},
  );
  writeJsonSync(`./data/${locale}.json`, ianaNames, { spaces: 2 });
});
