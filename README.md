# One A Month - My personal book review blog

## Why does this exist?

In 2024, I made a resolution to try and gain back the love for reading that I'd had as a child. To ease myself in, I determined to start reading at least one new book every month.

When I found myself in need of a personal project to showcase my front-end development capabilities, I couldn't think of a better use case than something to help motivate me as I made my way through my reading challenge. I built this app so I would have somewhere I could ramble about the books I was reading as much as I wanted.

The blog is still a work in progress - I began building it in October 2024, and had a backlog of 10 reviews to work through. i'm working to catch up as best I can in my spare time. However, if you've stumbled across this repo by accident and are interested in reading my thoughts so far on urban fantasy, shoujo manga, iconic horror literature, and a whole mess of things in between, then you can find the latest deploy of the app [here](https://erin-hughes.github.io/book-review-blog/).

## Running the app locally

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

After cloning the project, first install the dependencies by running `yarn` or `npm install` in the root directory.

Then simply run `yarn dev` or `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Adding a new review

To add a new review page and its corresponding card to the home page, only two files need to be added:

1. A markdown file that will contain the review text
2. A webp image file of the cover.

The crucial step is that both files follow a specific naming convention. The various files are all linked together by the name of the book in kebab case, e.g. `the-dead-take-the-a-train`.

An example PR adding a new review can be seen [here](https://github.com/erin-hughes/book-review-blog/pull/14).

### Adding the markdown file

Create a new file in the `reviews` folder. The name of this file depends on the name of the book being reviewed and the month that the review is for. For example, if the book is The Dead Take the A Train, and the month is January 2024, the filename should be `2024-01-the-dead-take-the-a-train.md`

Copy and paste the the following review template into the new review file:

```
---
title: "Title"
month: "Month 20XX"
author: ["Author"]
genre: ["Genre"]
summary: ""
pageCount: 1
rating: 1
---

Full review coming soon.
```

The metadata between the `---` will be used to populate the summary card at the top of each review page. The `title` field will also be used to compose the slug for the review.

### Adding the book cover image

Images should be in the webp format for performance reasons. There are online image converters that will convert jpegs or pngs to webp, but I've found it most convenient using [cwebp](https://www.npmjs.com/package/cwebp) to convert the cover images via the command line.

- Save an image of the book cover in the public/images/covers folder.
- From the root of this project, run the following command:

```bash
cwebp public/images/covers/<image-name> -o public/images/covers/<book-name-in-kebab-case>.webp
```

- Delete the original image.
