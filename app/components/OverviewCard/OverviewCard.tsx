import { FaStar } from "react-icons/fa";
import { formatImagePath } from "../../../utils/formatImagePath";
import { OverviewCardProps } from "./interfaces/OverviewCardProps";

const OverviewCard = ({
  title,
  author,
  genre,
  summary,
  pageCount,
  rating,
  imageSrc,
}: OverviewCardProps) => {
  return (
    <div className="p-6 mt-16 border-8 border-double border-stone-800">
      <div className="flex">
        <div className="w-1/4 mr-4">
          <img
            src={formatImagePath({
              path: imageSrc,
            })}
            alt={`Cover of ${title}`}
            width={200}
            height={300}
            className="object-cover m-0"
          />
        </div>
        <div className="w-3/4 flex flex-col justify-between m-auto">
          <div>
            <p>{summary}</p>
            <div className="grid grid-cols-2">
              <div>
                <p>
                  <strong className="font-ebGaramond text-xl">Author:</strong>{" "}
                  {author.join(", ")}
                </p>
                <p>
                  <strong className="font-ebGaramond text-xl">Genre:</strong>{" "}
                  {genre.join(", ")}
                </p>
                <p>
                  <strong className="font-ebGaramond text-xl">Pages:</strong>{" "}
                  {pageCount}
                </p>
              </div>
              <div className="flex flex-col items-center m-auto">
                <strong className="font-ebGaramond text-xl pb-2">
                  Rating:
                </strong>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={24}
                      className={
                        i < rating ? "text-rose-700" : "text-stone-700"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
