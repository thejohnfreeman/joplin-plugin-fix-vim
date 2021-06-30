import joplin from '@thejohnfreeman/joplin-plugin'
import { ContentScriptContext } from '@thejohnfreeman/joplin-plugin/types'

function plugin(CodeMirror) {
  const Vim = CodeMirror.Vim
  Vim.defineAction('newNote', () => joplin.commands.execute('newNote'))
  Vim.defineAction('gotoAnything', () =>
    joplin.commands.execute('gotoAnything')
  )
  Vim.mapCommand('<C-n>', 'action', 'newNote')
  Vim.mapCommand('<C-p>', 'action', 'gotoAnything')
}

function load(context: ContentScriptContext) {
  return { plugin }
}

export default {
  default: load,
}
