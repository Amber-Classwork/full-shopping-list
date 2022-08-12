export class Items{
_id:string;
item_name: string;
category_id: string;
price: Number;
quantity: Number;


constructor(_id?: string, item_name?:string, category?:string, price?:Number, quantity?:Number){
  this._id = _id!;
  this.item_name = item_name!;
  this.category_id = category!;
  this.price = price!;
  this.quantity = quantity!;

}
}
