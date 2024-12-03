import { ArticleQuoteProps } from "./ArticleQuoteProps";

const ArticleQuote = ({ children, byline }: ArticleQuoteProps) => {
  return (
    <span className="p-6 flex flex-col items-center font-ebGaramond">
      <span className="text-center flex">
        <span className="text-6xl italic pr-4 text-rose-700">"</span>
        <span className="text-xl self-center">{children}</span>
        <span className="text-6xl italic pl-4 text-rose-700">"</span>
      </span>
      {byline && <span className="text-end pt-2">{byline}</span>}
    </span>
  );
};

export default ArticleQuote;
