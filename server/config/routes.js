var api = require('../controllers/apis.js');
const path = require('path');

module.exports = function(app)
{
    /* routes */
    app.post('/send_comment', api.send_comment);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

