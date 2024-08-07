import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js';
const port=process.env.PORT || 5000;
connectDB();//connect to mongoose.

const app = express();

//Body Parser MiddleWare

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running....');
})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});