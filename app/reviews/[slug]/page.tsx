import { getAllReviews, getReviewBySlug } from "../../../utils/reviewParsing";
import Header from "../../components/Header/Header";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        <Markdown remarkPlugins={[remarkGfm]} className="p-6">
          {review.content}
        </Markdown>
      </div>
    </div>
  );
};

export { generateStaticParams };
export default ReviewPage;
