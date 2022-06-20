const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');
const ContentList = require("./Model/ContentList");
const port = 1955;
const whitelist = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
const http = require("http").Server(app);
app.use(bodyParser.json());

let lists = ContentList.playlist;
let newList = [...lists]
app.get('/api/playlist', (async (req, res) => {
    if (lists.length === newList.length) {
        return res.status(200).send(lists);
    }
    else {
        return res.status(200).send(newList);
    }
}));
app.post("/api/add", (req, res) => {
    const bodyList = req.body.paramData;
    const lengtNewList = newList.length;
    newList.push(bodyList);
    if (newList.length > lengtNewList && (bodyList.name || bodyList.type || bodyList.url || bodyList.duration)) {
        return res.status(200).send({ message: "Your content has been added." });
    } else {
        return res.status(206).send({ message: "Bad Request" });
    }
});

var server = http.listen(port, function () {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
