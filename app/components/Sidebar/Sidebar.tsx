import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-1/4 h-fit p-4 space-y-6 border-8 border-double border-stone-800">
      <div>
        <h3 className="text-xl">Welcome.</h3>
      </div>
      <div className="text-sm">
        <p className="bp-4">
          At the beginning of 2024, I made a resolution: in an effort to
          rekindle the love for reading that I had as a child, I would read at
          least one new book per month.
        </p>
        <p className="pt-4 bp-4">
          This was a huge undertaking for me, as it had been years since I had
          begun reading a book and made it all the way to the end. I built this
          blog as a place for me to write down my thoughts about what I'm
          reading, and a way to keep myself motivated to keep going.
        </p>
        <p className="pt-4 bp-4">
          If you've managed to stumble across it, I hope you find it
          interesting!
        </p>
      </div>
      <div className="p4 flex flex-col text-sm">
        <span>
          Follow me on{" "}
          <Link
            href="https://www.goodreads.com/user/show/174801728-erin"
            className="text-amber-200 hover:text-amber-400 transition-colors duration-200"
          >
            Goodreads
          </Link>
        </span>
        <span>
          View my blog's{" "}
          <Link
            href="https://github.com/erin-hughes/book-review-blog"
            className="text-amber-200 hover:text-amber-400 transition-colors duration-200"
          >
            source code
          </Link>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
