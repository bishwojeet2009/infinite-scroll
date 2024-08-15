import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemType } from '../interface/item-type';
import { addItemAction } from '../store/item-list.action';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  // itemList: any[] = []
  itemList$: Observable<ItemType[]>;
  offset = 10;
  pageNum = 1
  loadingItem = false;

  constructor(private api: ApiService, private store: Store<{ itemList: ItemType[] }>) {
    this.itemList$ = this.store.select('itemList');
    this.nextList();
  }

  ngOnInit(): void {

  }

  nextList() {
    this.loadingItem = true
    this.api.getItem(this.offset, this.pageNum).subscribe((res: any) => {
      if (res.results.length > 0) {
        // this.itemLists = this.itemLists.concat(res)
        this.store.dispatch(addItemAction({ payload: res.results }))
        this.pageNum += 1;
      }
    }, (err) => {
      console.log(err)
    }, () => {
      this.loadingItem = false;
    })
  }

}
