// const express = require("express");
// const router = express.Router();
// const ContentList = require("./../Model/ContentList");
// let lists = ContentList.playlist;
// let newList = [...lists]

// router.route("/get").post(async (req, res) => {
//     console.log("geldi");
//     if (lists.length === newList.length) {
//         return res.status(200).send(lists);
//     }
//     else {
//         return res.status(200).send(newList);
//     }
// });
// router.route("/post").post(async (req, res) => {
//     const { bodyList } = req.body;
//     const lengtNewList = newList.length;
//     newList.push(bodyList);
//     if (newList.length > lengtNewList) {
//         return res.status(200).send({ message: "Your content has been added." });
//     } else {
//         return res.status(400).send({ message: "Bad Request" });
//     }
// });

// module.exports = router;
