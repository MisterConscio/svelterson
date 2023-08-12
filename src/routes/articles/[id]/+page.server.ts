import { articles } from "$lib/articles";

export function load({ params }) {
  return {
    article: articles.find((article) => article.id === params.id),
  };
}
