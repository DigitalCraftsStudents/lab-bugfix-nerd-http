const nerds = require('nerds');
const app = (req, res) => {
    const {
        first,
        last,
        house,
        wand
    } = nerds.resolve('Harry Potter').asArray()[0];
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(``);
    res.end(`
        <h2>${house}</h2>
        <h1>${first} ${last}</h1>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
}
module.exports = app;
