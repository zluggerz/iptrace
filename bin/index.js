#! /usr/bin/env node
require('dotenv').config({path: '../.env'});
const request = require('request');
const yargs = require('yargs');
const table = require('cli-table');

const key = "Your_API_Key"

const url = "https://api.ipgeolocation.io/ipgeo?apiKey=" + key + "&ip="

function GetGeoData(ip) {
    console.log(ip);
    request.get(url + ip, function(err, res, body){
        if (err) {
            console.log(err);
        } else if (!err && res.statusCode == 200) {
            let info = JSON.parse(body);
            let disp = new table();
            disp.push(
                {'IP': info.ip},
                {'Country': info.country_name},
                {'City': info.city},
                {'District': info.district},
                {'Zip': info.zipcode},
                {'Lat': info.latitude},
                {'Lon': info.longitude}
            );
            console.log(disp.toString());
        } else {
            console.log(res);
        }
    })
}

var argv = yargs
    .command('$0 [ip]', 'Get GeoLocation info for an IP Address', (yargs) => {
        yargs
            .positional('ip', {
                describe: 'IP Address to look up'
            })
    }, (argv) => {
        GetGeoData(argv.ip);
    })
    .argv