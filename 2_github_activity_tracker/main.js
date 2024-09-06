const { error } = require('console');
const https = require('https');
const { resolve } = require('path');
const { json } = require('stream/consumers');
const userName = process.argv.slice(2)[0];

const activityTracker = async (userName) => {
    try {
        if (userName == undefined) console.log("Username was undefined");

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        };


        const body = await new Promise((resolve, reject) => {

            const req = https.get(`https://api.github.com/users/${userName}/events`, options, res => {
                let data = [];

                res.on('data', chunk => {
                    data.push(chunk);
                })

                res.on('end', () => {
                    resolve(Buffer.concat(data));

                })

                req.on("error", (error) => {
                    reject(error);
                })

                req.end();


            })
        });

        const data = JSON.parse(body.toString());
        const eventTypes = data.map(event => event.type)
        const eventTypeSet = new Set(eventTypes);

        console.log("Activities\n")
        for (const eventType of eventTypeSet) {
            console.log(eventType+"\n")
            for (const event of data) {
                if (eventType == event.type) {
                    console.log(event.repo.name+"\n");
                    if (eventType.toString() == "PushEvent" && event.payload.commits.length > 0) console.log(`Made ${event.payload.commits.length} commits \n`);
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }




}




activityTracker(userName);