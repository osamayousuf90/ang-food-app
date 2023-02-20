import { Component , OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/app/services/getAllProducts/get-all-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list : string[] = []
  constructor(private res: GetAllProductsService ) {}

  ngOnInit(): void {
   this.list = this.res.getAllFood()
  }

}
