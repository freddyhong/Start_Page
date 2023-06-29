const quotes = [
  {
    quote: "I'm not here to be perfect, I'm here to be real",
    author: "Lady Gaga",
  },
  {
    quote: "I'm not interested in money. I just want to be wonderful.",
    author: "Marilyn Monroe",
  },
  {
    quote:
      "The only thing that feels better than winning is winning when nobody thought you could.",
    author: "Hank Aaron",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote:
      "The best way to find out what you want in life is to try a lot of things.",
    author: "Oprah Winfrey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const flag = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[flag].quote;
author.innerText = quotes[flag].author;
