

// import MongoClient from 'mongodb';
const { MongoClient } = require('mongodb');

const connectToDB = async () => {
    // define the connection string
    const uri = `mongodb+srv://renukac2:123456ABC@mongodb1.fv4wdqy.mongodb.net/`;

    // create a new MongoClient
    const client = new MongoClient(uri);
    try {
        // connect to the client
        await client.connect();

        console.log('Connected to MongoDB');

        // get the database
        const database = client.db('sample_airbnb');

        // get the collection
        const collection = database.collection('listingsAndReviews');

        // display all the documents in the collection

        // create a query
        const query = { 'address.country': 'Brazil' };
        // cursor : a pointer  to the result set of a query
        const cursor = collection.find(query);

        // print documents
         //await cursor.forEach(doc => {
          // console.log(doc);
       // })
        // ascending order: 1
        // descending order: -1
        const result = await cursor.sort({ price: -1 }).limit(10).toArray();

        const listings = result.map(listing => [listing.name, parseFloat((listing.price).toString())]);

        console.log(listings);
    } catch (e) {
        console.error(e);
    } finally {
        // close the connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

connectToDB()