# joplin-plugin-fix-vim

This plugin was created to fix an [issue][1] with inconsistent behavior
when the editor has Vim keybindings.

[1]: https://github.com/laurent22/joplin/issues/4009

It adds and overrides these keybindings in all modes of Vim (insert, normal,
visual, command):

- <kbd>C-p</kbd>: Go to anything.
- <kbd>C-n</kbd>: Open a new note.
- <kbd>C-t</kbd>: Open a new todo.
