import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { APIResponse } from '../Models/api-response';
import { Category } from '../Models/category';
import { Items } from '../Models/items';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  item!: Items;
  categories: Category[] = [];
  constructor( private shoppingListServiceService:ShoppingListServiceService,
    private fb:FormBuilder,
    private router:Router,private route: ActivatedRoute) {}
    editItem = this.fb.group ({
      item_name:[""],
      category_id:[''],
      price:[""],
      quantity:[""]

    })

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      this.shoppingListServiceService.getItemById(params.get("id") as string).subscribe((res:APIResponse)=>{
        this.item = res.data

        this.shoppingListServiceService.getAllCategories().subscribe((res)=>{
          this.categories = res.data
          this.editItem.setValue({item_name: this.item.item_name, category_id: this.item.category_id, price: this.item.price, quantity: this.item.quantity})
        })

        
      })
    })
  }
  onSubmit() {

    console.log(this.editItem.value);
    this.shoppingListServiceService.updateItem(this.item._id,this.editItem.value).subscribe();
    alert("Successful");
    this.router.navigate(['/Display']);

  }

  getCategoryFromId(id:string){
    let category = this.categories.filter(category =>{
      return category._id = id;
    });
    console.log(category[0].category)

    return category[0].category;
  }

}
