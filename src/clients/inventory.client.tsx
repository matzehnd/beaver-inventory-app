import axios from "axios";

export class InventoryClient {
  private token: string = "";
  constructor(private baseUrl: string) {}
  setToken(token: string) {
    this.token = token;
  }

  getStock() {
    return axios<
      Array<{
        locationId: string;
        batchId: string;
        quantity: { amoung: number; unit: string };
      }>
    >({
      method: "get",
      baseURL: this.baseUrl,
      url: "stock",
      responseType: "json",
      headers: this.getHeaders(),
    });
  }

  getLocations() {
    return axios<
      Array<{
        id: string;
        name: string;
      }>
    >({
      method: "get",
      baseURL: this.baseUrl,
      url: "locations",
      responseType: "json",
      headers: this.getHeaders(),
    });
  }

  getBatches() {
    return axios<
      Array<{
        id: string;
        product: { id: string; name: string };
        producedAt: string;
        sellLatesAt: string;
      }>
    >({
      method: "get",
      baseURL: this.baseUrl,
      url: "batches",
      responseType: "json",
      headers: this.getHeaders(),
    });
  }
  getProducts() {
    return axios<
      Array<{
        id: string;
        name: string;
        quantity: { amount: number; unit: string };
      }>
    >({
      method: "get",
      baseURL: this.baseUrl,
      url: "products",
      responseType: "json",
      headers: this.getHeaders(),
    });
  }

  private getHeaders() {
    return { Authorization: `Bearer ${this.token}` };
  }
}
