NodeJs: Javascript Runtime 


/// create server using NOdejs 

//data 

[
    {
        "title":"Fluent English Mastery Course",
        "description":"Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.",
        "content":"Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!",
    },
    {
        "title" : "npm package",
        "description" : "npm is a package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer. ",
        "content":"NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use."
    },
    {
        "title" : "Express",
        "description" : "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. ",
        "content":"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. "
    },
    {
        "title" : "Mongoose",
        "description" : "What is a mongoose? A mongoose is any of nearly three dozen species of small bold predatory carnivores found mainly in Africa but also in southern Asia and southern Europe. Mongooses are noted for their audacious attacks on highly venomous snakes, such as king cobras. ",
        "content":"Mongoose documents represent a one-to-one mapping to documents as stored in MongoDB. Each document is an instance of its Model."
    }
]


collection :company_drive
[
    {
        "companyname": "Birla",
        "satus":"Completed",
        "date":"2021-01-01",
        "topicID":"6647f1f992cf915a32cb479a"
    },
      {
        "companyname": "Google",
        "satus":"Completed",
        "date":"2021-1-10",
        "topicID":"6647f1f992cf915a32cb479a"
    },
      {
        "companyname": "Airtel",
        "satus":"Completed",
        "date":"2021-10-20",
        "topicID":"6647f1f992cf915a32cb479a"
    },
      {
        "companyname": "SamSung",
        "satus":"Completed",
        "date":"2021-10-11",
        "topicID":"6647f1f992cf915a32cb479a"
    },

      {
        "companyname": "Apple",
        "satus":"Completed",
        "date":"2021-04-01",
        "topicID":"6647f1f992cf915a32cb479a"
    },

]

db.tasks.aggregate([ {$lookup: { from: "topics",localField : "topicID",foreignField:"_id",as: "topicName"} }]);
1.db.topics.aggregate([ {$match:{$and :[ { "due":{ $gte:new Date('2021-10-01'),$lte:new Date('2021-10-30')}}]} }]);

2.db.company_drive.aggregate([ {$match:
{
  $and :[ { 
    "date":{ 
      $gte:new Date('2021-10-15'),
      $lte:new Date('2021-10-31')
    }}]
}}])


