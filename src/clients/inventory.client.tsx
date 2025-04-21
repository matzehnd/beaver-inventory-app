import axios from "axios";
import { Location } from "../core/location";
import { Batch } from "../core/batch";
import { CONSTANTS } from "../Constants";

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
        quantity: { amount: number; unit: string };
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

  stockChange(batch: Batch, location: Location, quantity: number) {
    return axios<void>({
      method: "post",
      baseURL: this.baseUrl,
      url: "stock/change",
      responseType: "json",
      headers: this.getHeaders(),
      data: {
        batch: {
          id: batch.id,
          product: {
            id: batch.product.id,
            name: batch.product.name,
          },
          producedAt: batch.producedAt,
          sellLatesAt: batch.sellLatestAt,
        },
        location: {
          id: location.id,
          name: location.name,
        },
        quantity: {
          amount: quantity,
          unit: CONSTANTS.units.pcs,
        },
      },
    });
  }

  private getHeaders() {
    return { Authorization: `Bearer ${this.token}` };
  }
}
