import { quotes } from "../app/data/quotes";
import { Quote } from "../interfaces/Quote";

const getRandomQuote = (): Quote => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
};

export { getRandomQuote };
