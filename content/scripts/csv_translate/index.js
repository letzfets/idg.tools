import { readFile } from 'fs';
//import translate from 'translate-google'
import translate from 'google-translate'
// needs pnpm i @google-cloud/translate


readFile('test.csv', 'utf8', (err, data) => {
    if (err) throw err
    //console.log(data)
    //console.log('=====================================')
    const string = 'Hello world!'
    translate(string, { to: 'sv' }, 'translate.google.com')
        .then(res => {
            console.log(res)
        })
})

