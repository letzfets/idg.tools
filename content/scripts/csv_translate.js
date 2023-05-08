import { readFile } from 'fs';

readFile('test.csv', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
}
)
