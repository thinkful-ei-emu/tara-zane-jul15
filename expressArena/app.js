const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello !');
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
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