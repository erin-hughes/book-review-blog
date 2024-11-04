import { formatImagePath } from "../../../utils/formatImagePath";
import ReviewCard from "../ReviewCard/ReviewCard";
import { ReviewCardGroupProps } from "./interfaces/ReviewCardGroupProps";

const ReviewCardGroup = ({ reviews }: ReviewCardGroupProps) => {
  return (
    <section className="w-3/4 grid grid-cols-3 gap-x-8 gap-y-4">
      {reviews.map((review) => (
        <ReviewCard
          title={review.data.title}
          slug={review.slug}
          imageSrc={formatImagePath({
            path: `/images/covers/${review.slug}.webp`,
          })}
        />
      ))}
    </section>
  );
};

export default ReviewCardGroup;
