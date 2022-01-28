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

// create a collection called "restReference"

// add each restaurant
db.collection('restaurants').add(restaurants[3])
.then(doc => {
    console.log('Added restaurants', doc.id);
})
.catch(err => {
    console.error(err);
});

// read one document
db.collection('restaurants').doc('UwFAbLPXVhGFlzjz7rVF').get()
.then(doc => {
    console.log(doc.id, '=>', doc.data());
})
.catch(err => console.error(err));

// get all documents
db.collection('restaurants').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    })
})
.catch(err => {
    console.error(err);
});

// find a document
db.collection('restaurants')