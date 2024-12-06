class Naver {
  private userId: string;
  private providerName: string;
  private email: string;

  constructor() {
    this.userId = null;
    this.providerName = null;
    this.email = null;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }
  setProviderName(providerName: string) {
    this.providerName = providerName;
  }
  setEmail(email: string) {
    this.email = email;
  }
}