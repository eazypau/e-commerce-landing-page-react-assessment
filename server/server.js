// running on repl
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const PORT = process.env.PORT || 4001;
const app = express()
const http = require('http')
const server = http.Server(app)
app.use(cors())
app.use(express.json())

app.get("/products", async (req, res) => {
  try {
    const {data} = await axios({
      method: "GET",
      url: "https://staging.flowerchimp.com/asset/json/products.json",
      // headers: {
      //   "Content-Type": "application/json",
      // }
    })
    res.status(200).json(data).send(data)
  } catch (error) {
    console.log(error)
  }
})

server.listen(PORT, () => {
	console.log(`Server is listening on port http://localhost:${PORT}/`);
});