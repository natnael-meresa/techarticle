import axios from "axios";

const ApiService = {
  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      console.log(`error is here8989--> ${error}`)
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }, 

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const TagsService = {
  get() {
    return ApiService.get("/api/tags");
  }
};

export const ArticlesService = {
  query(type, params) {
    console.log(`error is here-000-> ${params}`)
    console.dir(params);

    return ApiService.query("/api/article/articles", {
      params: params
    });
  },
  queryByglobal(type, params) {
    console.log(`error is here-123-> ${params}`)

    return ApiService.query("/api/articles", {
      params: params
    });
  },
  queryByfavorite(type, params) {
    return ApiService.query("/api/articles" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(slug) {
    return ApiService.get("/api/article", slug);
  },
  create(params) {
    return ApiService.post("/api/articles", { article: params });
  },
  update(slug, params) {
    return ApiService.update("/api/articles", slug, { article: params });
  },
  destroy(slug) {
    return ApiService.delete(`/api/articles/${slug}`);
  }
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "article slug required to fetch comments"
      );
    }
    return ApiService.get(`/api/article/articles/${slug}/comments`);
  },

  post(slug, payload) {
    return ApiService.post(`/api/article/articles/${slug}/comments`, {
      comment: { body: payload }
    });
  },

  destroy(slug, commentId) {
    return ApiService.delete(`/api/articles/${slug}/comments/${commentId}`);
  }
};

export const FavoriteService = {
  add(slug) {
    return ApiService.post(`/api/article/articles/${slug}/favorite`);
  },
  remove(slug) {
    return ApiService.delete(`/api/article/articles/${slug}/favorite`);
  }
};