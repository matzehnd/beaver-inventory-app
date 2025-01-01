import axios from "axios";

export class AuthClient {
  private token: string = "";
  constructor(private baseUrl: string) {}
  setToken(token: string) {
    this.token = token;
  }

  getToken(email: string, password: string, validityInHours: number) {
    return axios<{ token: string }>({
      method: "post",
      baseURL: this.baseUrl,
      url: "users/token",
      responseType: "json",
      data: { email, password, validityInHours },
      headers: this.getHeaders(),
    });
  }

  private getHeaders() {
    return { Authorization: `Bearer ${this.token}` };
  }
}
