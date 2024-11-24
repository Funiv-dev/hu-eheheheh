import { URLSearchParamsMap } from './URLSearchParamsMap.js';
import { URLSearchParamsDefault  } from './URLSearchParamsDefault.js';

export class URLParamSearchManager {

  constructor() {
    this.URLParamsFactory = null;
  }

  /**
   * @param {string} flag 
   */
  selectURLSearchParamsFactory(flag) {
    
    if(flag == 'default') {
      return new URLSearchParamsDefault();
    } else if(flag == 'map') {
      return new URLSearchParamsMap();
    }
    
    throw Error('타입을 선택해주세요.');
  }
}