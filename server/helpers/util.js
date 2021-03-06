/**
 * Created by kaihe on 4/29/17.
 */
var twilio = require('twilio');
var twilioKeys = require('../config/twillio-keys').twilioKeys;
var twilioClient = new twilio.RestClient(twilioKeys.AccountSID, twilioKeys.AuthToken);
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCYAXFUzdidNb5J_EnXz9Pa6Jbsedt6FdM'
});


module.exports.sendMessage = function (content, receiver, callback) {
    twilioClient.messages.create({
        body: content,
        to: receiver,
        from: twilioKeys.TwilioNumber
//  mediaUrl: imageUrl
    }, function(err, data) {
        if (err) {
            console.error('Could not notify');
            console.error(err);
        } else {
            console.log('notified');
            callback();
        }
    });
};

module.exports.searchAddress = function searchAddress(address, callback) {
    console.log('Search Address');
    // Geocode an address.
    address = address + " NY";
    googleMapsClient.geocode({
        address: address
    }, function(err, response) {
        if (!err) {
            var coord = response.json.results[0].geometry.location;
            // console.log("success: ",coord);
            var zipcode;
            if (response.json.results[0].address_components[6].types[0] === "postal_code")
                zipcode = response.json.results[0].address_components[6].long_name;
            else if (response.json.results[0].address_components[7].types[0] === "postal_code")
                zipcode = response.json.results[0].address_components[7].long_name;
            // console.log("success: ",zipcode);
            callback(coord, zipcode);
            // return {coord:coord,zipcode:zipcode};
        } else {
            console.log("The Geocode was not successful for the following reason: " + status);
            return null;
        }

    });
};