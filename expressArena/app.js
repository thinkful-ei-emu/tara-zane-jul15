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
  let numbers=req.query.numbers.map(num => Number(num));
  console.log(numbers);
  let randomNumbers=[];

  for(let i=0;i<6;i++){
    randomNumbers.push(Math.ceil(Math.random()*20)); 
  }

  console.log(randomNumbers);

  let count = 0;
  randomNumbers.forEach((randNum, index) => {
    for(let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      console.log(`random number ${index} is ${randNum}, user number ${i} is ${num}`);
      if (randNum === num) {
        count ++;
        numbers.splice(i, 1);
        console.log(numbers);
        break;
      } 
    }
  });
  
  console.log('final count',count);

  let responseText = '';
  if (count < 4) {
    responseText = 'Sorry about your luck.';
  }
  else if (count === 4) {
    responseText = "Congratulations! You win a free ticket!";
  }

  else if (count === 5) {
    responseText = "Congratulations! You win $100!";
  }

  else if (count === 6) {
    responseText = "Wow! You won the MegaMillions!!!!!";
  }
  res.send(responseText);
});



app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});