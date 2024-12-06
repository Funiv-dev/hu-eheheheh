class Kakao {
  private userProfileId: string;
  private userProfileUsername: string;
  private userProfileProvider: string;
  private userAccessToken: string;
  private userRefreshToken: string;

  constructor() {
    this.userProfileId = null;
    this.userProfileUsername = null;
    this.userProfileProvider = null;
    this.userAccessToken = null;
    this.userRefreshToken = null;
  }

  setUserProfileId(userProfileId: string) {
    this.userProfileId = userProfileId;
  }
  getUserProfileId() {
    return this.userProfileId;
  }
  setUserProfileUsername(userProfileUsername: string) {
    this.userProfileUsername = userProfileUsername;
  }
  getUserProfileUsername() {
    return this.userProfileUsername;
  }
  setUserProfileProvider(userProfileProvider: string) {
    this.userProfileProvider = userProfileProvider;
  }
  getUserProfileProvider() {
    return this.userProfileProvider;
  }
  setUserAccessToken(userAccessToken: string) {
    this.userAccessToken = userAccessToken;
  }
  getUserAccessToken() {
    return this.userAccessToken;
  }
  setUserRefreshToken(userRefreshToken: string) {
    this.userRefreshToken = userRefreshToken;
  }
  getUserRefreshToken() {
    return this.userRefreshToken;
  }
}