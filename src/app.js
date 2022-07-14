const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

require('dotenv').config();

const CorsOptions = {
    origin: '*',
    method: '*',
    Credentials: true
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(CorsOptions));
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`); 
});
