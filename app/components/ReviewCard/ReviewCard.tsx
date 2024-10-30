import Link from "next/link";
import { ReviewCardProps } from "./interfaces/ReviewCardProps";

const ReviewCard = ({ title, slug, imageSrc }: ReviewCardProps) => {
  return (
    <Link key={slug} href={`/reviews/${slug}`}>
      <div className="bg-stone-800 p-4 flex flex-col items-center group">
        <div className="w-full h-[400px] overflow-hidden rounded">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition duration-200 ease-in-out"
          />
        </div>
        <h3 className="mt-4 text-center text-lg font-ebGaramond">{title}</h3>
      </div>
    </Link>
  );
};

export default ReviewCard;
