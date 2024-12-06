import { URLParamSearchManager } from '../src/modules/urlSearchParams/URLSearchParamsManager.js';

let testStr1 = 'http://localhost:4001?test1=1&test2=2&test3=3&test4=4';
let testStr2 = 'test1=1&test2=2&test3=3&test4=4';

let url = new URLParamSearchManager();

// let defaultFactory = url.selectURLSearchParamsFactory('default');
// let mapFactory = url.selectURLSearchParamsFactory('map');

// defaultFactory.setDefault(testStr2);
// defaultFactory.printEntries();

// mapFactory.setInit(testStr2);
// mapFactory.add('test1', '1');
// mapFactory.printEntries();