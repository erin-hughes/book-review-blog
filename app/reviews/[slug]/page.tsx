import { getAllReviews, getReviewBySlug } from "../../../utils/reviewParsing";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Header from "../../components/Header/Header";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import ArticleQuote from "../../components/ArticleQuote/ArticleQuote";
import PullQuote from "../../components/PullQuote/PullQuote";
import { Review } from "../../../interfaces/Review";

const generateStaticParams = async () => {
  const reviews: Review[] = getAllReviews();
  return reviews.map((review) => ({
    slug: review.slug,
  }));
};

const ReviewPage = async ({ params }: { params: { slug: string } }) => {
  const review = await getReviewBySlug({ slug: params.slug });

  return (
    <div>
      <Header title={`${review.data.month}: ${review.data.title}`} />
      <div className="max-w-7xl mx-auto prose prose-stone prose-invert prose-custom">
        <OverviewCard
          title={review.data.title}
          author={review.data.author}
          genre={review.data.genre}
          summary={review.data.summary}
          pageCount={review.data.pageCount}
          rating={review.data.rating}
          // TODO - pull this image path logic out into a wee util
          imageSrc={`/images/covers/${review.slug}.webp`}
        />
        <Markdown
          className="p-6"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // @ts-expect-error - quote is a custom HTML element
            articlequote: ArticleQuote,
            pullquote: PullQuote,
          }}
        >
          {review.content}
        </Markdown>
      </div>
    </div>
  );
};

export { generateStaticParams };
export default ReviewPage;
