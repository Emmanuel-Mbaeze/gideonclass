const express = require ("express")
const app = express()
app.use = (express.json())
const PORT =process.env.PORT||2222
app.listen(PORT,()=>{
    console.log(`connecting to ${PORT}`);
})