import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { slugify } from "./slugify";
import { Review, ReviewMetadata } from "../interfaces/Review";

// path to markdown files
const filepath = path.join(process.cwd(), "reviews");

// fetch all reviews and their metadata
const getAllReviews = (): Review[] => {
  const fileNames = fs.readdirSync(filepath);

  const allReviews = fileNames.map((fileName) => {
    const fullPath = path.join(filepath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: slugify({ title: data?.title }),
      data: data as ReviewMetadata,
      content,
    };
  });

  // reversing the order so the most recent reviews float to the top
  return allReviews.reverse();
};

// fetch a single review by its slug
const getReviewBySlug = async ({ slug }: { slug: string }): Promise<Review> => {
  const fileNames = fs.readdirSync(filepath);

  const matchingFile = fileNames.find((fileName) => fileName.includes(slug));
  if (!matchingFile) {
    throw new Error(`No file found for slug: ${slug}`);
  }

  const fullPath = path.join(filepath, matchingFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    data: data as ReviewMetadata,
    content,
  };
};

export { getAllReviews, getReviewBySlug };
