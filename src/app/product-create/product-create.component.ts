import { Router, Routes } from '@angular/router';
import { RestApiService } from './../service/rest-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Input() productDetails = {
    name: '',
  }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
      this.restApi.createProduct(this.productDetails).subscribe((data: {}) => {
        this.router.navigate(['/list-products'])
      })
  }

}
