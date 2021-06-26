import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SharedRayonService {

  baseURL: string = environment.URI_API;
  product: Product;

  itemsMenu: any[] = [
    { index: 0, utilRoute: "zone", matIcon: "archive", label: "Zonage" },
    { index: 1, utilRoute: "price", matIcon: "euro", label: "Prix" },
    { index: 2, utilRoute: "price-sold", matIcon: "payment", label: "Prix soldé" },
    { index: 3, utilRoute: "picture", matIcon: "add_a_photo", label: "photo" }
  ];

  items: any[] = [
    { critere: "Code-modèle", res: "Mizuno Shadow 4" },
    { critere: "Code Libellé", res: "KR32" },
    { critere: "Stock", res: 22 },
    { critere: "Prix TTC", res: "Bleu" },
    { critere: "Couleur", res: 42 },
    { critere: "Matière", res: 125 },
    { critere: "Zone", res: 100 },
  ];

  constructor(private http: HttpClient) { }

  getProductById(idProduct: string): Observable<Product> {
    return this.http.get<Product>( `${this.baseURL}/api//products/${idProduct}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( `${this.baseURL}/api//products`);
  }

}




