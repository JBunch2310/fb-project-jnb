// import our restaurants
const restaurants = require('./restaurants.json');

// import a set of tools to talk to firebasw and firestore
const{ initializeApp, applicationDefaultt, cert} = require('firebase-admin');
const{ getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');

// connect to Firestore
const credentials = require('./credentials.json');

// create a collection called "restaurants"

// add each restaurant