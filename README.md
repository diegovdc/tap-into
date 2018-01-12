# tap-logger

## Installation
`npm i tap-logger`

## Usage
```
const tap = require('./index')
tap('algo')//logs and returns "algo" 
tap('hola', 'mundo')//logs "'hola' , 'mundo'" and returns "mundo" 
tap.c(5)('algo')//logs '5, "algo"' and returns "algo" 
tap.ap(s => s.split(), 'algo')//logs ['a','l','g','o']' and returns "algo" 
tap.hola()//logs "hola"
tap.start()//logs "\n.\n..\n...\n....\n.....\n......\n.......\n........\nStarting:....\n"
tap.end()//logs "\nEnding:....\n........\n.......\n......\n.....\n....\n...\n..\n.\n"
```