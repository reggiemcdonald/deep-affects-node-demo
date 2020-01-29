const request = require("request");
const fs = require('fs');

const options = {
    method: 'POST',
    url: 'https://proxy.api.deepaffects.com/audio/generic/api/v1/async/asr',
    qs: {
        apikey: '<API_KEY>',
        webhook: '<API_KEY>'
    },
    headers: {  'Content-Type': 'application/json' },
    body: {
        encoding: 'M4A',
        languageCode: 'en-US',
        content: fs.readFileSync('Meeting-Jan26.m4a').toString('base64'),
        sampleRate: 8000,
        enableSpeakerDiarization: true,
        enablePunctuation: true,
        audioType: "callcenter"
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});