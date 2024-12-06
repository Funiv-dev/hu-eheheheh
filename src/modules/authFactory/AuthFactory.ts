import { Naver } from './Naver';
import { Kakao } from './Kakao';
import { Google } from './Google';

class AuthFactory {
  providerName: string;

  __constructor() {
    this.providerName = null; //kakao, naver, google, happe
  }

  setProviderName(providerName) {
    this.providerName = providerName;
  }

  createKakakoFactory() {
    return new KakaoFactory();
  }

  createNaverFactory() {
    return new NaverFactory();
  }

  createGoogleFactory() {
    return new GoogleFactory();
  }

  setConcreteAuth(authProvider) {
    if (authProvider == 'kakao') {
      return this.createKakakoFactory();
    } else if (authProvider == 'naver') {
      return this.createNaverFactory();
    } else if (authProvider == 'google') {
      return this.createGoogleFactory();
    }

    throw new Error('알 수 없는 SNS 인증 조건입니다.');
  }
}

class KakaoFactory {
  concreteKakao() {
    return new Kakao();
  }
}

class NaverFactory {
  concreteNaver() {
    return new Naver();
  }
}

class GoogleFactory {
  concreteGoogle() {
    return new Google();
  }
}

export { KakaoFactory, GoogleFactory, NaverFactory, AuthFactory };
