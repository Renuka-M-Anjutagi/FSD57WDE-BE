const { error } = require('console');
const fs = require('fs');

//Read File
fs.readFile('test.txt','utf8',(err , data) => {
    if(err)
        {
            console.log(err);
            return;
        }
        console.log(data.split('\n'))
});

//read file  synchronously
try{
    const data = fs.readFileSync('test.txt')
}catch(error){
    console.log(error);
}

// write file

const data =  'Hello World';

fs.writeFileSync('test.txt',data, (err)=>
{
    if(err)
        {
            console.log(err);
            return;
        }
    console.log('File written succefuly');
});


//