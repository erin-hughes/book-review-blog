import { getAllReviews, getReviewBySlug } from "../../../utils/reviewParsing";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../../components/Header/Header";
import OverviewCard from "../../components/OverviewCard/OverviewCard";

const generateStaticParams = async () => {
  const reviews = getAllReviews();
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
          imageSrc={`/images/covers/${review.slug}.jpg`}
        />
        <Markdown remarkPlugins={[remarkGfm]} className="p-6">
          {review.content}
        </Markdown>
      </div>
    </div>
  );
};

export { generateStaticParams };
export default ReviewPage;
