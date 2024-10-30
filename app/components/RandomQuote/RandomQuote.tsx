import { getRandomQuote } from "../../../utils/getRandomQuote";

const RandomQuote = () => {
  const quote = getRandomQuote();
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-center font-ebGaramond flex">
        <span className="text-6xl pr-4 text-rose-700">"</span>
        <h2 className="text-2xl self-center">{quote.text}</h2>
        <span className="text-6xl pl-4 text-rose-700">"</span>
      </div>
      <p className="text-end pt-2">
        {quote.author}, <span className="font-style: italic">{quote.book}</span>
      </p>
    </div>
  );
};

export default RandomQuote;
