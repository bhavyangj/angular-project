import { Component, OnInit, Input } from '@angular/core';
// import { ShoppingCartService } from '../../SERVICES/shopping-cart.service'
// import { WishlistService } from 'src/app/SERVICES/wishlist.service';
import { Router } from '@angular/router';
// import { HeaderComponent } from 'src/app/COMPONENTS/header/header.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: any = [];
  filteredProducts: any = [];
  searchproducts: any = [];
  rating: number;
  categoryName: string;
  searchText: string;
  // @Input() filters: FilterComponent;
  // filter: FilterComponent;
  // rating=this.filter.rating;
  // durationInSeconds = 5;
  max: number;
  min: number;
  step: number;
  thumbLabel: boolean;
  value: number;

  constructor(
    // public shopping_cart: ShoppingCartService,
    // public wishlist: WishlistService,
    private router: Router,
  ) {
    this.searchproducts = [];
    this.categoryName = "all";
    this.rating = 1;
    this.max = 100000;
    this.min = 0;
    this.step = 10;
    this.thumbLabel = true;
    this.searchText = "";
    this.value = 0;
  }

  // openSnackBar(str) {
  //   this._snackBar.open(str);
  // }

  ngOnInit(): void {
    console.log("products: ", this.products)
    setTimeout(() => {
      this.filterCategory()
    }, 10);
    this.getProducts()
    // console.log("in ngonit search products: ", this.searchproducts)
  }
  getProducts=()=>{
    let items = localStorage.getItem('All Products')
    console.log("All Products", items)
    return JSON.stringify(items)
  }

  setrating(num: number) {
    this.rating = num
  }

  filterSearch() {
    this.searchproducts = this.products.filter((x: { title: string | string[]; }) =>
      x.title.includes(this.searchText)
    );
    console.log("searchitems: ", this.searchproducts)
  }
  searchGo(){
    console.log("search:" , this.searchText)
    this.filterSearch()
  }

  filter = { electronics: true, fashion: true, mobiles: true, computers: true, books: true, beauty: true };
  filterCategory() {
    // this.filteredProducts = this.products.filter(x =>
    //   (x.category === 'electronics' && this.filter.electronics)
    //   || (x.category === 'fashion' && this.filter.fashion)
    //   || (x.category === 'mobiles' && this.filter.mobiles)
    //   || (x.category === 'computers' && this.filter.computers)
    //   || (x.category === 'books' && this.filter.books)
    //   || (x.category === 'beauty' && this.filter.beauty)
    // );
    // console.log(this.filteredProducts)
  }
  setdefaultfilter() {
    this.categoryName = "all";
    this.rating = 1;
    this.max = 100000;
    this.min = 0;
    this.step = 10;
    this.thumbLabel = true;
    this.value = 0;
    this.searchText = "";
    this.clearcategory()
  }

  selectall() {
    this.filter.electronics = false;
    this.filter.books = false;
    this.filter.computers = false;
    this.filter.mobiles = false;
    this.filter.fashion = false;
    this.filter.beauty = false;
    this.filterCategory()
  }
  clearcategory() {
    this.filter.electronics = true;
    this.filter.books = true;
    this.filter.computers = true;
    this.filter.mobiles = true;
    this.filter.fashion = true;
    this.filter.beauty = true;
    this.filterCategory()
  }


  addToCart(p: any) {
  //   // this.shopping_cart.addProduct(p)
  //   alert("Product added to cart")
  //   // this.openSnackBar("Product added to cart")
  }
  addToWishlist(p: any) {
  //   alert("Product added to wishlist")
  //   // this.wishlist.addProduct(p)
  //   // this.openSnackBar("Product added to wishlist")
  }

  //move to product detail page
  onClick(item: any) {
  //   // console.log("Products abcd: ",this.products)
  //   // localStorage.setItem('Products',JSON.stringify(this.products))
  //   this.router.navigate(['/product-detail/' + item.id])
  }

}
