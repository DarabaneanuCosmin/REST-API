const db = require("../REST API/mysqldb/connection");
const util = require("util");
async function getAllPosts(req, res) {
    const query = await db.pool.query("SELECT id,personId,title,content FROM posts ", async function(error, queryResult) {
        if (error) {
            throw error;
        }
        if (queryResult != undefined) {
            var message = [];
            for (var iterator = 0; iterator < queryResult.length; iterator++) {
                var msg = {
                    "id": queryResult[iterator].id,
                    "personId": queryResult[iterator].personId,
                    "title": queryResult[iterator].title,
                    "content": queryResult[iterator].content
                };
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

async function getPostByUserId(req, res, id) {
    const query = await db.pool.query("SELECT id,personId,title,content FROM posts WHERE personId =?", [id], async function(error, queryResult) {
        if (error) {
            throw error;
        }
        if (queryResult != undefined) {
            var msg = {
                "id": queryResult[0].id,
                "personId": queryResult[0].personId,
                "title": queryResult[0].title,
                "content": queryResult[0].content
            };
            return await msg;

        } else {
            return null;
        }
    });
}
module.exports = { getAllPosts, getAllPeopleAndPosts };