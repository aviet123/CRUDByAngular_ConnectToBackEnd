import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-product-connection';

  constructor(
    private router: Router
  ){

  }

  back(){
    this.router.navigateByUrl('/list-products');
  }
}
