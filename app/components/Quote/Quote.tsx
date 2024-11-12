import "./Quote.css";

const Quote = ({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) => {
  return (
    <span className="font-ebGaramond text-xl max-w-4xl m-auto mt-8 mb-8 flex flex-col relative">
      <span className="top-left-corner" />
      <span className="flex flex-col p-4">
        {children}
        <br />
        <span className="text-end text-lg">p. {page}</span>
      </span>
      <span className="bottom-right-corner" />
    </span>
  );
};

export default Quote;
