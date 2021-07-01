import { ContentScriptContext } from '@thejohnfreeman/joplin-plugin/types'

function plugin(context: ContentScriptContext) {
  return (CodeMirror) => {
    const Vim = CodeMirror.Vim
    // @ts-ignore
    Vim.defineAction('gotoAnything', () => context.postMessage('gotoAnything'))
    // @ts-ignore
    Vim.defineAction('newNote', () => context.postMessage('newNote'))
    // @ts-ignore
    Vim.defineAction('newTodo', () => context.postMessage('newTodo'))
    Vim.mapCommand('<C-p>', 'action', 'gotoAnything')
    Vim.mapCommand('<C-n>', 'action', 'newNote')
    Vim.mapCommand('<C-t>', 'action', 'newTodo')
  }
}

function load(context: ContentScriptContext) {
  return { plugin: plugin(context) }
}

export default {
  default: load,
}
