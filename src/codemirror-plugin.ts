import joplin from '@thejohnfreeman/joplin-plugin'
import { ContentScriptContext } from '@thejohnfreeman/joplin-plugin/types'

function plugin(CodeMirror) {
  const Vim = CodeMirror.Vim
  Vim.defineAction('gotoAnything', () =>
    joplin.commands.execute('gotoAnything')
  )
  Vim.defineAction('newNote', () => joplin.commands.execute('newNote'))
  Vim.defineAction('newTodo', () => joplin.commands.execute('newTodo'))
  Vim.mapCommand('<C-p>', 'action', 'gotoAnything')
  Vim.mapCommand('<C-n>', 'action', 'newNote')
  Vim.mapCommand('<C-t>', 'action', 'newTodo')
}

function load(context: ContentScriptContext) {
  return { plugin }
}

export default {
  default: load,
}
