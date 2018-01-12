// correr con npm run watch watch-me.
const tap = require('./index')

tap.start()

tap.hola()
tap('algo')
tap.l('algo')
tap('loguea','algo')
tap(tap('loguea', 'algo', 'más'))
tap.c('digo')(tap(tap('loguea', 'algo')));
tap.ap(s => s.split(''), tap(tap('loguea', 'algo')));
tap(tap.ap(s => '\n'+s.split('') +'\n\nnnn', tap(tap('loguea', 'algo'))), 'como la luna');
(tap((tap(
    tap(
        tap.c('digo')(tap.hola()))), 
    'digo')))



tap.end()

