import { RestApiService } from './../service/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: any = [];

  name: string = "";
  

  constructor(
    public restApi: RestApiService
  ) {
    this.loadProducts()
   }

  ngOnInit(): void {

  }

  getProduct(id){
    return this.restApi.getProduct(id)
   }

  loadProducts(){
    return this.restApi.getProducts().subscribe((data: {})=>{
      this.Products = data;
    })
  }

  search(){
    return this.restApi.getProductsByName(this.name).subscribe((data: {})=>{
      this.Products = data;
    })
  }

  deleteProduct(id){
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteProduct(id).subscribe(data =>{
        this.loadProducts(), console.error('something went wrong');    
      })
    }
  }

}
