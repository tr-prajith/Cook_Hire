const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const inquiryRoute = require("./routes/inquiryRoute");
const cookRoute = require('./routes/cookRoute')
const path = require('path')


const app = express()
connectDB()
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app"
    ],
  })
);

app.use("/api/inquiry", inquiryRoute);
app.use('/api/cooks',cookRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server Connected ${PORT}`);
    
})