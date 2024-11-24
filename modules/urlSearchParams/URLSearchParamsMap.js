export class URLSearchParamsMap {

  constructor() {
    this.URLSearchParamsMap = new Map();
    this.mapCount = 0;
  }

  /**
   * @param {string} key 
   * @param {string} value 
   */
  set(key, value) {
    this.URLSearchParamsMap.set(key, value);
  }

  /** 
   * @param {string} str 
   */
  setInit(str) {
    let temp = str.split('&');
    this.mapCount = temp.length;

    for(let item of temp) {
      const [key, value] = item.split('=');
      if (!key || !value) continue;

      this.URLSearchParamsMap.set(key, value);
    }
  }

  /**
   * @param {string} key 
   * @param {string} value 
   */
  add(key, value) {
    this.URLSearchParamsMap.set(key, value);
  }

  /**
   * @param {void} key 
   */
  get(key) {
    this.URLSearchParamsMap.get(key);
  }

  printEntries() {
    for(const [key, value] of this.URLSearchParamsMap) {
      console.log(key + ', ' + value);
    }
  }
}