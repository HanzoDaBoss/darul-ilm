import { defineQuery } from "groq";

import { sanityClient } from "./client";

export const postsQuery =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  readTime,
  audience,
  publishedAt,
  "imageUrl": mainImage.asset->url
}`);

export const postBySlugQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  readTime,
  audience,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  body
}`);

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  readTime?: number;
  audience?: string[];
  publishedAt: string;
  imageUrl?: string;
};

export function getPosts() {
  return sanityClient.fetch<PostSummary[]>(postsQuery);
}

export function getPostBySlug(slug: string) {
  return Promise.all([sanityClient.fetch(postBySlugQuery, { slug }), getPosts()]).then(
    ([post, posts]) => {
      if (!post) {
        return { post: null, previous: null, next: null };
      }

      const postIndex = posts.findIndex((item) => item.slug === post.slug);

      return {
        post,
        previous: postIndex >= 0 ? (posts[postIndex + 1] ?? null) : null,
        next: postIndex > 0 ? (posts[postIndex - 1] ?? null) : null,
      };
    },
  );
}
