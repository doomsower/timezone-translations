I could not find decent translations of IANA timezone names, so I had to glue two projects together:

- [TimeZoneNames](https://github.com/mj1856/TimeZoneNames) contains localized display names from Windows language packs.
- [windows-iana](https://github.com/rubenillodo/windows-iana) provides Windows <-> IANA mappings

# Usage

Import JSON files from from `data` dir:

```js
import en_US from 'timezone-translations/data/en_US.json`
```

# License

MIT
