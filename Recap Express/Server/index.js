const express = require("express");
const app = express();
const PORT = 4000 || process.env;
const { data } = require("./data/data");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
const { router } = require("./routes/productRoute");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
//----------------------------------------------------get
// app.get("/api", (req, res) => {
//   const newProducts = data.map((item) => {
//     const { id, title } = item;
//     return { id, title };
//   });
//   res.status(200).json({
//     message: "success",
//     data: newProducts,
//   });
// });
// //------------------------------------------------params
// app.get("/api/:productId", (req, res) => {
//   const { productId } = req.params;

//   const singleProduct = data.find((item) => {
//     return item.id === Number(productId);
//   });
//   if (!singleProduct) {
//     res.send("Product does not exist");
//   } else {
//     res.json(singleProduct);
//   }
// });
// //-------------------------------------------------Query
// app.get("/api/v1/:query", (req, res) => {
//   const { search, limit } = req.query;
//   if (search !== "" && limit !== "") {
//     const filterData = data
//       .filter((item) => {
//         return item.title.toLowerCase().includes(search.toLowerCase());
//       })
//       .slice(0, Number(limit));

//     res.json(filterData);
//   } else {
//     res.json(data);
//   }
// });

// //--------------------------------------------------------Middleware
// const logger = (req, res, next) => {
//   console.log("we are logging the logger!");
//   next();
// };
// // app.use(logger);
// // app.get("/logger", (req, res) => {
// //   res.send("A middle ware has been sent");
// // });
// //----------------------------------------Auth Middleware----
// const { authUser } = require("./auth/auth");
// app.use("/dash", authUser);
// app.get("/dash", (req, res) => {
//   res.send("This is the dashboard");
// });

// //--------------------------------------------------All
// app.all("*", (req, res) => {
//   res.status(200).send("Page does not exist bro!");
// });

app.use("/products", router);

//------------------------------------------------------------SERVER
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
