import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor() { }


  getAllFood(): string[]{
    return [
     "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"
    ]
  }
}
