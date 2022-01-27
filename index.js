// import our restaurants
const restaurants = require('./restaurants.json');

// import a set of tools to talk to firebasw and firestore
const{ initializeApp, applicationDefaultt, cert} = require('firebase-admin/app');
const{ getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');

// import our credentials
const credentials = require('./credentials.json');

// connect to firebase services
initializeApp({
    credential: cert(credentials)
});

// connect to Firestore
const db = getFirestore();

// create a collection called "restaurants"

// add each restaurant
db.collection('restaurants').add(restaurants[1])
.then(doc => {
    console.log('Added restaurants', doc.id);
})
.catch(err => {
    console.error(err);
})