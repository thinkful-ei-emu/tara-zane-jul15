const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello !');
});

app.get('/burgers', (req, res) => {
  res.send('We have juicy cheese burgers!');
});

app.get('/pizza/pepperoni',(req,res)=>{
  res.send('Your pizza is on the way.');
});
app.get('/pizza/pineapple',(req,res)=>{
  res.send('We dont serve that never call again.');
});
app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
  `;
  res.send(responseText);
});
app.get('/sum', (req, res) => {
  const reqA=parseInt(req.query.a,10);
  const reqB=parseInt(req.query.b,10);

  res.send(`The sum of ${reqA} and ${reqB} is ${reqA+reqB}`);
});

app.get('/cipher', (req, res) => {
  const shift = Number(req.query.shift);
  const text = req.query.text;
  const textArray = text.split('');
  const numArray = textArray.map(char => char.charCodeAt(0));
  const ciphArray = numArray.map(num => {
    let newNum = num + shift;
    if (newNum > 90 && newNum <97) {
      newNum = newNum - 26;
      return newNum;
    }
    else if(newNum > 122) {
      return newNum-26;
    }
    return newNum;
  });
  const charArray = ciphArray.map(num => String.fromCharCode(num));
  const newText = charArray.join('');
  res.send(newText);
  //65, 97
});

app.get('/lotto',(req,res)=>{
  const numbers=req.query.numbers;
  console.log(numbers);
  let randomNumbers=[]

  for(let i=0;i<6;i++){
    randomNumbers.push(Math.floor(Math.random()*20)); 
    
  }

 randomNumbers.forEach((num,i)){
   if(num in numbers){
     
   }
 }
  
  

  
  
  res.send('Sorry About Your Luck');

});



app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});