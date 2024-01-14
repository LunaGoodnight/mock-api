import express, { Request, Response } from "express";
import cors from "cors"; // Import CORS module

const app = express();
const port = 3999; // You can choose any port

app.use(cors());
app.use(express.json());


const bannerDetail = {

  bannerId: 1,
  title: {

  }
}
const list = [
  {
    bannerId: 1,
    title: "cuteLuna",
    imageSrc: "http://placekitten.com/200/200",
    sequence: 1,
  },
  {
    bannerId: 2,
    title: "紅包拿來",
    imageSrc: "http://placekitten.com/600/600",
    sequence: 2,
  },
  {
    bannerId: 3,
    title: "尋找紅包之旅現在啟程不會遲到",
    imageSrc: "http://placekitten.com/800/800",
    sequence: 5,
  },
  {
    bannerId: 4,
    title: "尋找紅包之旅現在啟程不會遲到",
    imageSrc: "http://placekitten.com/300/300",
    sequence: 7,
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.get("/api/LobbyManagement/QuickBanner/List", (request, response) => {
  const res = {
    data: list,
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
});


app.get("/api/LobbyManagement/QuickBanner/Management", (request, response) => {
  const res = {
    data: bannerDetail,
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
