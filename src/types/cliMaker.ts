export type cliMakerOptions = {
  addVerbose?: boolean
  addHelp?: boolean
}

export type boolParameterOptions = {
  comand:string
  alias?:string
  description?:string
  defaultValue:boolean
}

export type commandOptions = {
  comand:string
  alias?:string
  description?:string
}