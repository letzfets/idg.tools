import { readFile } from 'fs';
import translate from 'translate-google'

readFile('test.csv', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
    console.log('=====================================')
    const string = 'Hello world!'
    translate(string, { to: 'es' })
        .then(res => {
            console.log(res)
        })
})
