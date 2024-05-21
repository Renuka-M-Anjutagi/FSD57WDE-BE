// File handeling
const { error } = require('console');
const fs = require('fs');


//Read file

fs.readFile('text.txt','utf8', (err , data) =>{
  if(err)
    {
      console.log(err);
      return;
    }
    console.log(data.split('\n'));
});

//Read File synchronously
try{
  const data = fs.readFileSync('test.txt','utf8')
  console.log(data);
}catch(error){

  console.log(error);

}

// write file

const data1 = "Hello World!";

fs.writeFile('date-time.txt', data1 , (err) => {

  if(err){
    console.log(err);
    return;
  }
  console.log(data1);
  console.log('File write successfully');
});

// write file in append mode


const dataapp = "Welcome tobe appended";

fs.appendFile('test.txt', dataapp , (err) => {

  if(err){
    console.log(err);
    return;
  }
  console.log(dataapp);
  console.log('File write successfully');
});