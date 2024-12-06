export class URLSearchParamsMap {
  URLSearchParamsMap: Map<string, string>;
  mapCount: number;

  constructor() {
    this.URLSearchParamsMap = new Map();
    this.mapCount = 0;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  set(key: string, value: string) {
    this.URLSearchParamsMap.set(key, value);
  }

  /**
   * @param {string} str
   */
  setInit(str: string) {
    const temp: string[] = str.split('&');
    this.mapCount = temp.length;

    for (const item of temp) {
      const [key, value] = item.split('=');
      if (!key || !value) continue;

      this.URLSearchParamsMap.set(key, value);
    }
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  add(key: string, value: string) {
    this.URLSearchParamsMap.set(key, value);
  }

  /**
   * @param {string} key
   */
  get(key: string) {
    this.URLSearchParamsMap.get(key);
  }

  printEntries() {
    for (const [key, value] of this.URLSearchParamsMap) {
      console.log(key + ', ' + value);
    }
  }
}