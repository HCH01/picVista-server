require('dotenv').config()
const mongoDB = require('./db/connect')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors')

const handleError = require('./middlewares/handle-error')
const { fileRoute, authRoute } = require('./routes')
const auth = require('./middlewares/auth')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('/auth',authRoute)
app.use('/api/file/',fileRoute);
app.use(auth)
app.use(handleError);

const start = async () => {
    try {
        await mongoDB(process.env.MONGO_URI)
        app.listen(PORT, ()  => console.log(`server started at http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
start()
