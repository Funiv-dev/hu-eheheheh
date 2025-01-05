import { URLSearchParamsMap } from './URLSearchParamsMap.js';
import { URLSearchParamsDefault } from './URLSearchParamsDefault.js';

export class URLParamSearchManager {
  URLParamsFactory: string;

  constructor(URLparams: string) {
    this.URLParamsFactory = URLparams;
  }

  /**
   * @param {string} flag
   */
  selectURLSearchParamsFactory(flag: string) {
    if (flag == 'default') {
      return new URLSearchParamsDefault();
    } else if (flag == 'map') {
      return new URLSearchParamsMap();
    }
    throw Error('타입을 선택해주세요.');
  }
}
