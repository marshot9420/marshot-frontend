const quotes = [
  {
    quote:
      "if you gaze long enough into an abyss, the abyss will gaze back into you.",
    author: " - Beyond Good and Evil, Friedrich Nietzsche(1844 ~ 1900) - ",
  },
  {
    quote: "It is possible for ordinary people to choose to be extraordinay.",
    author: " - Elon Musk (1971 ~) - ",
  },
  {
    quote: "Power comes not from knowledge kept but from knowledge shared.",
    author: " - Bill Gates (1955 ~)",
  },
  {
    quote: "there is some good in this world, and it's worth fighting for.",
    author: " - The lord of the rings:The two towers, Samwise Gamgee - ",
  },
  {
    quote:
      "Cowards never start. The weak never finish and the winners never quit.",
    author: " - Iron man, Tony Stark (1970 ~ 2023) - ",
  },
  {
    quote:
      "Until you make the unconscious conscious, it will direct your life, and you will call it fate.",
    author: " - Carl Jung (1875 ~ 1961) - ",
  },
  {
    quote:
      "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
    author: " - Confucius (B.C 551 ~ 479) - ",
  },
  {
    quote:
      "In politics, nothing happens by accident. if it happens, you can bet it was planned that way.",
    author: " - Franklin D. Roosevelt (1882 ~ 1945) - ",
  },
  {
    quote:
      "Impossible just means there are difficult and complicated problems. It's literally not impossible.",
    author: " - Somebody - ",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: " - Steve Jobs (1955 ~ 2011) - ",
  },
  {
    quote: "Stand up straight with your shoulders back.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote:
      "Treat yourself like you are someone you are responsible for helping.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Make friends with people who want the best for you.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote:
      "Compare yourself to who you were yesterday. not to who someone else is today.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Do not let your children do anything that makes you dislike them.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Set your house in perfect order before you criticize the world.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Pursue what is meaningful (not what is expedient).",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Tell the truth – or, at least, don't lie.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote:
      "Assume that the person you are listening to might know something you don't.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Be precise in your speech.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Do not bother children while they are skateboarding.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
  {
    quote: "Pet a cat when you encounter one in the street.",
    author: " - 12 Rules for life, Jordan Peterson (1962 ~) - ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
