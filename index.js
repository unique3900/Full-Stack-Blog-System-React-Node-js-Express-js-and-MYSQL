const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { connection } = require('./DB/conn');
var cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes.js');
const blogRoutes = require('./routes/blogroutes');
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './BlogManagement/public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()+ file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage })



app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true,
}));
app.use(express.json({ limit: 52428800 }));
app.use(cookieParser());

app.post('/api/v1/file/imageUpload', upload.single('image'), function (req, res) {
  const file = req.file;
  res.json({ success: true, message: "Image Uploaded Successfully",fileLink:file.filename });
})

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blog', blogRoutes);

// app.use(cors());



const port = process.env.PORT;


app.listen(port, () => {
    console.log("Server Started");
})