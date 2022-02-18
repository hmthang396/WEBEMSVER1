const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var bodyParser = require("body-parser");
const publicDirectoryPath = path.join(__dirname, "/views");
const publicDirectoryPath2 = path.join(__dirname, "/lib");
app.use(express.static(publicDirectoryPath2));
router.get("/Alarm", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-alarm.html"));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.get("/Views", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});
router.get("/Plan", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/Plan.html"));
});
router.get("/Register", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/register.html"));
});
router.get("/History", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/history.html"));
});
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/login.html"));
});

router.get("/Report", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/Report.html"));
});

router.get("/Report/Download", async(req, res) => {
    if (req.query.area === "Factory") {
        if (req.query.type === "KPI") {
            res.download("./Report/KPI_Factory.xlsx");
        }
        if (req.query.type === "Electric") {
            res.download("./Report/Electric_Factory_Report.xlsx");
        }
        if (req.query.type === "Water-Steam") {
            res.download("./Report/WS_Factory_Report.xlsx");
        }
    } else {
        if (req.query.area === "Utility") {
            res.download("./Report/Utility_Report.xlsx");
        }
        if (req.query.area === "Process") {
            res.download("./Report/Process_Report.xlsx");
        }
        if (req.query.area === "Packaging") {
            res.download("./Report/Packaging_Report.xlsx");
        }
    }
});

router.get("/Factory", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-nhamaydashboard.html"));
});

//=(SUM('Dien theo ngay'!AF554:AF584)+SUM('Dien theo ngay'!AQ554:AQ584))/SUM('Cong Nghe-Chiet'!D554:D584)
router.get("/Electric", function(req, res) {
    res.sendFile(
        path.join(__dirname + "/views/demo-nhamaydashboardelectric.html")
    );
});

router.get("/Steam", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-nhamaydashboardsteam.html"));
});

router.get("/Water", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-nhamaydashboardwater.html"));
});
router.get("/Monitor/Main", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-monitormain.html"));
});
router.get("/Monitor/Utility", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-monitorutility.html"));
});
router.get("/Monitor/Process", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-monitorprocess.html"));
});
router.get("/Monitor/Packaging", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-monitorpackaging.html"));
});
router.get("/Monitor/Steam", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/demo-monitorsteam.html"));
});

router.post("/api/v2", function(req, res) {
    console.log(req.headers);
    res.send("Heloo");
});

app.use("/", router);
app.listen(process.env.port || 3000,()=>{
	console.log("Server is up on port 3000.");
});