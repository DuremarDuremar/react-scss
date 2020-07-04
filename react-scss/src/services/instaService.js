export default class InstaService {
  constructor() {
    this._apiBase = "http://localhost:3000/";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`could not fetch ${url};received ${res.status}`);
    }

    return await res.json();
  };

  getAllPost = async () => {
    const res = await this.getResource("/posts/");
    return res;
  };
}