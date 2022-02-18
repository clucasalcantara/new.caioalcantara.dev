const MEDIUM_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed";

interface IMediumService {
  getPosts(username: string): Promise<any>;
}

export const MediumService: IMediumService = {
  getPosts: async (username) => {
    try {
      const res = await fetch(`${MEDIUM_URL}/@${username}`);

      return res.json();
    } catch (error) {
      console.error(error);
    }
  },
};
