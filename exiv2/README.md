# Generate tags.js and index.d.ts

`node exiv2/generate.mjs` generates the `tags.js` and `index.d.ts` files.

All tags are described in [exiv2.json](exiv2.json) which was extracted from
the [eviv2 metadata site](https://exiv2.org/tags.html). The simplest way to 
regenerate the json file is to go to the website with a browser (Firefox or Chrome),
open the dev tools and enter the following one liner in the console:

```javascript
tags = Array.from($("tbody > tr")).map(tr => Array.from(tr.children).map(e => e.innerText)).map(([tag,,,key,type]) => ([tag, key.split(".").slice(1), type].flat()))
```

As the type information is incomplete for a few tags (e.g. the exif-reader specific Date type),
[generate.mjs](generate.mjs) as a few hardcoded type overrides. 

The website itself is generated based on the output of a tool called `taglist` (part of the Eviv2 project),
so if the website vanishes, we can still use this tool. (But need some investment of time to build it
from the C++ sources)


