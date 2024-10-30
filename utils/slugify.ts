const slugify = ({ title }: { title: string }) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces and non-alphanumeric characters with hyphens
    .replace(/(^-|-$)/g, ""); // remove leading or trailing hyphens

export { slugify };
