import type { PageServerLoad } from "./$types";

import { articles } from "$lib/articles";

export const load: PageServerLoad = () => {
  return {
    summary: articles.map((article) => ({
      id: article.id,
      title: article.title,
    })),
  };
};
