const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const crypto = require('crypto');
const app = express();
const errorMiddleware = require('./middlewares/error');
const path = require('path')
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://13.61.4.27:3001',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Generate a random secret key
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);

const products = require('./routes/product');
const userRoutes = require('./routes/userRoutes'); 
const authRoutes = require('./routes/authRoutes');
const detailRoutes = require('./routes/detailRoutes');
const pageRoutes = require('./routes/pageRoutes');
const chartRoutes = require('./routes/chartRoutes');
const cardRoutes = require('./routes/cardRoutes');
const gridRoutes = require('./routes/gridRoutes');
const reportRoutes = require('./routes/reportRoutes');
const exportRoutes = require('./routes/exportRoutes');
const dateRoutes = require('./routes/dateRoutes');
const accordionRoutes = require('./routes/accordionRoutes');
const allmeterRoutes = require('./routes/allmeterRoutes');
const radarRoutes = require('./routes/radarRoutes');
const emailRoutes = require('./routes/emailRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const logoutRoutes = require('./routes/logoutRoutes');

app.use('/api/v1', products);
app.use('/api/import', userRoutes);
app.use('/api/verify', authRoutes);
app.use('/api/info', detailRoutes);
app.use('/api', pageRoutes);
app.use('/api', chartRoutes);
app.use('/api', cardRoutes);
app.use('/api', gridRoutes);
app.use('/api', reportRoutes);
app.use('/api', exportRoutes);
app.use('/api', dateRoutes);
app.use('/api', accordionRoutes);
app.use('/api', allmeterRoutes);
app.use('/api', radarRoutes);
app.use('/api', emailRoutes);
app.use('/api', equipmentRoutes);
app.use('/api', logoutRoutes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
  })
}

app.use(errorMiddleware);

module.exports = app;
