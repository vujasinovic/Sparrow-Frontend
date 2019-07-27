export class TokenRefreshResponse {
  constructor(
    public accessToken: string,
    public expDate: Date
  ) {}
}
