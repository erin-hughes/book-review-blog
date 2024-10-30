import { getAllReviews } from "../utils/reviewParsing";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ReviewCardGroup from "./components/ReviewCardGroup/ReviewCardGroup";
import { getRandomQuote } from "../utils/getRandomQuote";
import RandomQuote from "./components/RandomQuote/RandomQuote";

const HomePage = () => {
  const reviews = getAllReviews();
  const randomQuote = getRandomQuote();

  return (
    <div>
      <Header title="One A Month" />
      <div className="max-w-7xl mx-auto">
        <RandomQuote />
        <main className="flex p-6 space-x-8">
          <Sidebar />
          <ReviewCardGroup reviews={reviews} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
