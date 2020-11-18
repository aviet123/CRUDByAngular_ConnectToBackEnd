import { Product } from './../service/product';
import { RestApiService } from './../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: any = this.actRouter.snapshot.params['id'];
  productData! : Product;

  constructor(
    public restApi: RestApiService,
    public actRouter: ActivatedRoute,
    public router: Router
  
  ) {
   }

  ngOnInit(): void {
    console.log(this.id);
    this.restApi.getProduct(this.id).subscribe((data) => {
      this.productData = data;
    })
  }
 

  updateProduct(){
    if(window.confirm('Are you sure, you want to update')){
      this.restApi.updateProduct(this.id, this.productData).subscribe(data=>{
        this.router.navigate(['/list-products'])
      })
    }
  }

}
