import express, {Request, Response} from "express";
import cors from "cors"; // Import CORS module

const app = express();
const port = 3999; // You can choose any port

app.use(cors());
app.use(express.json());


const bannerDetailFirst = {
  bannerId: 1,
  title: {
    1: 'cute luna',
    2: '',
    3: 'adfadsf',
    4: 'adfadsf',
    5: 'adfadsf',
    6: 'adfadsf',
    7: 'adfadsf',
  },
  sequence: 11,
  imageSrc: 'http://placekitten.com/300/300',
  internalLinkType:1,
  eventId: 123,
  accountSettingProductMarketId: 22,
  categoryId:33
}
const bannerDetailSecond = {
  bannerId: 1,
  title: {
    1: '發大財',
    2: '想睡覺',
    3: '喝咖啡',
    4: '吃蛋糕',
    5: '摸貓咪',
    6: '睡覺覺',
    7: '追劇劇',
  },
  sequence: 11,
  imageSrc: 'http://placekitten.com/300/300',
  internalLinkType:1,
  eventId: 123,
  accountSettingProductMarketId: 22,
  categoryId:33
}
const bannerDetailDictionary = {
  1: bannerDetailFirst,
  2: bannerDetailSecond,
}
const productList = [
  {
    accountSettingProductMarketId: 3,
  },
  {
    accountSettingProductMarketId: 2
  },
  {
    accountSettingProductMarketId: 21
  },
  {
    accountSettingProductMarketId: 22
  },
];
const eventList = [
  {
    id: 1,
    title: 'cuteLuna'
  },
  {
    id: 2,
    title: 'abc'
  },

];
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
app.get("/api/DropdownList/Event", (request, response) => {
  const res = {
    data: eventList,
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
});
app.get("/api/DropdownList/Product", (request, response) => {
  const res = {
    data: productList,
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
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
    data: bannerDetailDictionary[1],
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
});
app.put("/api/LobbyManagement/QuickBanner/Management", (request, response) => {



  const res = {
    data: bannerDetailDictionary[1],
    statusCode: 0,
    message: "",
    traceId: "0HN01T81M1Q1G:00000004",
  };
  response.send(res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
