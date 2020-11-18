import { RestApiService } from './../service/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../service/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any = this.actRouter.snapshot.params['id'];
  productData! : Product;

  constructor(
    public restApi: RestApiService,
    public actRouter: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
    this.restApi.getProduct(this.id).subscribe((data) => {
      this.productData = data;
    })
  }

}
