import express from "express";

import cors from "cors";

console.log("here is my server");

const app = express();
app.use(cors());

const PORT = 8080;

const ourBooks = [
  {
    title: "Range",
    imgSource:
      "https://en.wikipedia.org/wiki/File:Range-_Why_Generalists_Triumph_in_a_Specialized_World.jpg",
    imgAlt: "a book about how generalists are as important as specialists",
  },
  {
    title: "Taking the work out of networking",
    imgSource:
      "https://books.google.co.uk/books/publisher/content?id=k8RWDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2NtPIz7cuH0DKWQs-tgX_fsmQ_GQ&w=1280",
    imgAlt: "Does it has to be that hard?",
  },
  {
    title: "Atomic Habits",
    imgSource:
      "https://parentotheca.com/wp-content/uploads/2021/04/IMG_0356-scaled.jpg",
    imgAlt: "the front cover of the book Atomic Habits",
  },
  {
    title: "Think Again",
    imgSource:
      "https://adamgrant.net/wp-content/uploads/2020/09/ThinkAgain-PaperbackCover-469x720.jpg",
    imgAlt: "Adam Grant is still the best",
  },
  {
    title: "Option B",
    imgSource:
      "https://adamgrant.net/wp-content/uploads/2020/07/OptionB-copy-551x720.jpg",
    imgAlt: "Sheryl Sandberg is the other half of the best",
  },
  {
    title: "Hidden Potential",
    imgSource:
      "https://adamgrant.net/wp-content/uploads/2023/05/HiddenPo_9780593653142_jkt_front_r1B-477x720.jpg",
    imgAlt: "Achieving great things",
  },
  {
    title: "Give and Take",
    imgSource:
      "https://adamgrant.net/wp-content/uploads/2020/07/GiveandTake-copy-551x720.jpg",
    imgAlt: "An approach to success, again, by Adam Grant",
  },
];

app.get("/", function (request, response) {
  response.json();
});

app.get("/books", function (request, response) {
  response.json(ourBooks);
});
app.get("/posts", function (request, response) {
  const posts = [
    {
      id: 1,
      title: "post01",
      subHeading: "subheading text goes here",
    },
    {
      id: 2,
      title: "post02",
      subHeading: "subheading text goes here",
    },
  ];

  response.json(posts);
});
// --- --- ---

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
