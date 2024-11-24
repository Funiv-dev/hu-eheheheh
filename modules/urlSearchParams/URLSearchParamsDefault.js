export class URLSearchParamsDefault {

  constructor() { 
    this.URLSearchParams = null;
  }

  /**
   * 
   * @param {string} str 
   */
  setDefault(str) {
    this.URLSearchParams = new URLSearchParams(str);
  }

  printEntries() {
    for(const [key, value] of this.URLSearchParams) {
      console.log(key + ', ' + value);
    }
  }
}