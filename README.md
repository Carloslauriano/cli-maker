# cli-maker

The idea is to make a helper for creating a custom CLI

Below is an idea of how I would like it to look

```js

import cliMaker from 'cli-maker'

const cli = new cliMaker();

cli.registerCommand({
  comand: 'hello',
  alias:'h'
},
()=>{
  console.log('world');
})

```

```

customCli hello

-> world

```

or

```

customCli h

-> world

```

# Contributors

<a href="https://github.com/Carloslauriano/cli-maker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Carloslauriano/cli-maker" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
