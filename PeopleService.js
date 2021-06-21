const db = require("../REST API/mysqldb/connection");
async function getPeopleList(req, res) {
    const query = await db.pool.query("SELECT id, firstName,lastName FROM people", async function(error, queryResult) {
        if (error) {
            throw error;
        }
        if (queryResult != undefined) {
            var message = [];
            for (var iterator = 0; iterator < queryResult.length; iterator++) {
                var msg = { "id": queryResult[iterator].id, "firstName": queryResult[iterator].firstName, "lastName": queryResult[iterator].lastName };
                message.push(msg);
            }
            res.writeHead(200, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(message));
        } else {
            let message = { message: `A aparut o problema` };
            res.writeHead(401, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(message));
        }
    });
}
async function getPeopleId(req, res) {
    const query = await db.pool.query("SELECT id FROM people", async function(error, queryResult) {
        if (error) {
            throw error;
        }
        if (queryResult != undefined) {
            var message = [];
            for (var iterator = 0; iterator < queryResult.length; iterator++) {
                var msg = { "id": queryResult[iterator].id };
                message.push(msg);
            }
            res.writeHead(200, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(message));
        } else {
            let message = { message: `A aparut o problema` };
            res.writeHead(401, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(message));
        }
    });
}
module.exports = { getPeopleList, getPeopleId };