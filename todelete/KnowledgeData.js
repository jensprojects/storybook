import trashpark from "../Images/trashpark.png";
import microplasticbag from "../Images/microplasticbag.png";

const knowledgedata = [
  {
    page: 1,
    type: "lesson",
    content: [
      {
        type: "image",
        image: trashpark,
      },
      {
        type: "text",
        text: "Let's have a look on all the trash the kids found in the park. A lot of it looks like plastic. What is plastic though? Plastic is a kind of material that is made by people and can be formed into almost any shape. Most plastics are strong, long-lasting, and lightweight. They resist damage by water, heat, chemicals, and electricity. In addition, plastics can be made in many colors. To get more information about it and how it is made: Check out the video.",
      },
      {
        type: "video",
        link: "https://www.youtube.com/embed/6PgjA3HISmw",
      },
    ],
  },
  {
    page: 1,
    type: "lesson",
    content: [
      {
        type: "image",
        image: microplasticbag,
      },
      {
        type: "text",
        text: "Now you will find out how harmful plastic can be and what you could do in order to prevent a lot of trash",
      },
      {
        type: "video",
        link: "https://www.youtube.com/embed/gTr_rxnMP-o",
      },
    ],
  },
]

  // { id: 1, type: "image", image: trashpark },
  // {
  //   id: 2,
  //   type: "text",
  //   text: "Let's have a look on all the trash the kids found in the park. A lot of it looks like plastic. What is plastic though? Plastic is a kind of material that is made by people and can be formed into almost any shape. Most plastics are strong, long-lasting, and lightweight. They resist damage by water, heat, chemicals, and electricity. In addition, plastics can be made in many colors. To get more information about it and how it is made: Check out the video.",
  // },
  // {
  //   id: 3,
  //   type: "video",
  //   link: "https://www.youtube.com/embed/6PgjA3HISmw",
  // },
  // { id: 4, type: "image", image: microplasticbag },
  // {
  //   id: 5,
  //   type: "text",
  //   text: "Now you will find out how harmful plastic can be and what you could do in order to prevent a lot of trash",
  // },
  // {
  //   id: 6,
  //   type: "video",
  //   link: "https://www.youtube.com/embed/gTr_rxnMP-o",
  // },
  //   { id: 7, type: "image", image: microplasticbag },
  //   {
  //     id: 8,
  //     type: "text",
  //     text: "",
  //   },
  //   { id: 9, type: "video", link: "" },
];

export { knowledgedata };