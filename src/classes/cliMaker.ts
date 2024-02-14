import { helpCommand } from "../utils"
import { boolParameterOptions, cliMakerOptions, commandOptions } from "../types"

const defaultValueOptions = {
  addVerbose: true,
  addHelp: true,
}

export class cliMaker {
  options: cliMakerOptions

  constructor(options: cliMakerOptions | undefined = undefined) {

    //============Validate Config
    if (!options) {
      this.options = defaultValueOptions
    } else {
      this.options = {...defaultValueOptions,...options}
    }
    //===============================

    //============Add Verbose
    if (this.options.addVerbose) this.registerBooleanParameter({
      comand: 'verbose',
      alias: 'v',
      defaultValue: false
    })
    //===============================

    //============Add Help
    if (this.options.addHelp) this.registerCommand({
      comand: 'help',
    },helpCommand)
    //===============================

  }

  registerCommand({comand,alias,description}:commandOptions,callBack:()=>Promise<void>) {

  }

  registerBooleanParameter({ comand, alias, description, defaultValue }: boolParameterOptions) {

  }

}