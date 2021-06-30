import joplin from '@thejohnfreeman/joplin-plugin'
import { ContentScriptType } from '@thejohnfreeman/joplin-plugin/types'

joplin.plugins.register({
  async onStart() {
    joplin.contentScripts.register(
      ContentScriptType.CodeMirrorPlugin,
      'fixVim',
      './codemirror-plugin.js'
    )
  },
})
