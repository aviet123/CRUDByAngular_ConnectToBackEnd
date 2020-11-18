import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',
   pathMatch: 'full', 
   redirectTo: 'list-products' 
  },
  { path: 'create-product',
   component: ProductCreateComponent
   },
  { path: 'list-products',
   component: ProductListComponent
   },
  { path: 'edit-product/:id',
   component: ProductEditComponent 
  },
  { path: 'product-details/:id',
   component: ProductDetailsComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
