const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get("/", (req, res) => {
    // 기능
    res.send("여기는 루트입니다");
});

app.get("/login", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <input type="text" placeholder="아이디"/><br />
        <input type="pwd" placeholder="비밀번호"/><br />
        <button>로그인</button>
      </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("서버 가동");
});




// app.js에서 ejs를 불러오는 방법
// app.get('/', (req, res)=>{
//     res.render('aaa', { title: "title" });
//     });

// res.render(‘aaa’); 를 통해 views 폴더 안에 aaa.ejs 
// 파일을 찾아서 출력 해줍니다. 여기서 .ejs을 생략해도 됩니다.
// 그 이유는 위에서 설정할 때 ‘view engine’, ‘ejs’을 했기 때문입니다.



// app.js에서 template engine 설정하는 방법입니다.

// /* app.js */
// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs'); // view engine으로 ejs을 쓴다는 뜻
// app.set('views', 'views'); //  ejs파일을 저장할 때 views 폴더에 저장하면
// 따로 설정을 안해줘도 app.js에서 views 폴더 안에 ejs파일을 사용합니다.
// app.get('/', (req, res)=>{
// res.render('aaa',{ title: "title" });
// });
// app.listen(3000, ()=>{
// console.log('connected at 3000');
// });





// post 사용

// const bodyParser = require('body-parser');  // 1
// app.use(bodyParser.urlencoded({ extended: true }));  // 2

// app.set('view engine', 'ejs');

// app.set('views', './views');

// app.get('/', (req,res)=>{
//     res.render('index');
// });

// app.get('/get', (req,res)=>{
//     res.send("GET");
// });

// app.post('/post', (req,res)=>{  // 3
//     res.send("POST");
// });

// app.listen(3000, () =>{
//     console.log('Connected at 3000');
// });





// 개인정보가 노출됨
// get 사용

// app.set('view engine', 'ejs');

// app.set('views', './views');

// app.get('/', (req, res)=>{
//     res.render('index');
// });

// app.get('/get', (req,res)=>{
//     res.send("GET");
// });

// app.listen(3000, () =>{
//     console.log('Connected at 3000');
// });





// Hello World!

// app.get('/', (req, res) => {
    //     res.send("Hello World!");
    // });
    
    // app.listen(3000, () => {
        //     console.log("Server running at localhost:3000");
        // });


