import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // searchText: string;
  // searchState: boolean;

  constructor(
    // public shoppingCart: ShoppingCartService, 
    // public wishlist: WishlistService
    ) { }

  ngOnInit(): void {
  }
  // searchGo(){
  //   console.log("search: ", this.searchText)
  //   return this.searchText
  // }
  // unfocus(){
  //   this.searchState = false
  // }
  // transform(items: any[], searchText: string): any[] {
  //   if(!items) return [];
  //   if(!searchText) return items;
    
  //   searchText = searchText.toLowerCase();
  //       return items.filter( it => {
  //         return it.name.toLowerCase().includes(searchText);
  //       });
  //  }
}
