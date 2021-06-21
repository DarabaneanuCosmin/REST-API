const http = require('http');

const server = http.createServer(async(req, res) => {
    const {
        getPeopleList,
        getPeopleId
    } = require('./PeopleService');

    const {
        getAllPosts,
        getAllPeopleAndPosts
    } = require('./PostService');
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT",
        "Access-Control-Max-Age": 2592000, // 30 days
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    };

    if (req.url === '/api/v1/people' &&
        req.method === 'GET') {
        getPeopleList(req, res);

    } else
    if (req.url === '/api/v1/posts' && req.method === 'GET') {
        getAllPosts(req, res);
    } else if (req.url === '/api/v1/people/id' &&
        req.method === 'GET') {
        getPeopleId(req, res);
    } else if (req.url === '/api/v1/people/posts' &&
        req.method === 'GET') {
        getAllPeopleAndPosts(req, res);
    } else {
        let message = { message: `Endpoint-ul nu exista!` };
        res.writeHead(401, {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify(message));
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`));