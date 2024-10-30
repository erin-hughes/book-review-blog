import ReviewCard from "../ReviewCard/ReviewCard";

interface ReviewCardGroupProps {
  reviews: any[];
}

const ReviewCardGroup = ({ reviews }: ReviewCardGroupProps) => {
  return (
    <section className="w-3/4 grid grid-cols-3 gap-x-8 gap-y-4">
      {reviews.map((review) => (
        <ReviewCard
          title={review.data.title}
          slug={review.slug}
          imageSrc={`/images/covers/${review.slug}.jpg`}
        />
      ))}
    </section>
  );
};

export default ReviewCardGroup;
