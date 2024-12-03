import "./PullQuote.css";
import { PullQuoteProps } from "./PullQuoteProps";

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <span className="font-ebGaramond text-xl max-w-4xl m-auto mt-8 mb-8 flex flex-col relative">
      <span className="top-left-corner" />
      <span className="p-4">{children}</span>
      <span className="bottom-right-corner" />
    </span>
  );
};

export default PullQuote;
