# cli-maker

The idea is to make a helper for creating a custom CLI

Below is an idea of how I would like it to look

```js

import cliMaker from 'cli-maker'

const cli = new cliMaker();

cli.registerCommand({
  comand: 'hello',
},
()=>{
  console.log('world');
})

```
