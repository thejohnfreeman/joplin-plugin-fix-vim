# joplin-plugin-fix-vim

This plugin was created to fix an [issue][1] with inconsistent behavior
when the editor has Vim keybindings.

[1]: https://github.com/laurent22/joplin/issues/4009

It adds and overrides these keybindings in all modes of Vim (insert, normal,
visual, command):

- &lt;C-p>: Go to anything.
- &lt;C-n>: Open a new note.
- &lt;C-t>: Open a new todo.
