/**
 * To use this you must edit the case switch in node_modules/deep-affects/src/model/utils
 * to have a case for M4A ... -.-
 * @type {*}
 */

const DeepAffects = require("deep-affects");
const fs = require('fs');
const defaultClient = DeepAffects.ApiClient.instance;

const UserSecurity = defaultClient.authentications["UserSecurity"];
UserSecurity.apiKey = '<API_KEY>';

const apiInstance = new DeepAffects.DiarizeApiV2();

const body = DeepAffects.DiarizeAudio.fromFile("Meeting-Jan26.m4a", "m4a");
body.path

const callback = (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + JSON.stringify(data));
    }
};

webhook = '<WEB_HOOK>';


apiInstance.asyncDiarizeAudio(body, webhook, callback);