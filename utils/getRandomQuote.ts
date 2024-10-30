import { quotes } from "../app/data/quotes";

const getRandomQuote = () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
};

export { getRandomQuote };
