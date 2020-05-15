const cors_proxy = require("cors-anywhere");

const host = "0.0.0.0";
const PORT = 8081;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + PORT);
});