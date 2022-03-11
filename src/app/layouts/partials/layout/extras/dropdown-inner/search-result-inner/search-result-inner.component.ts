import {ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result-inner',
  templateUrl: './search-result-inner.component.html',
})
export class SearchResultInnerComponent implements OnInit {
  @HostBinding('class') class = 'menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  @HostBinding('attr.data-kt-search-element') dataKtSearch = 'content';

  resultModels: Array<ResultModel> = resultModels;
  recentlySearchedModels: Array<ResultModel> = recentlySearchedModels;

  keyword: string = '';
  searching: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  search(keyword: string) {
    this.keyword = keyword;
    this.searching = true;

    setTimeout(() => {
      this.searching = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  clearSearch() {
    this.keyword = '';
  }
}

interface ResultModel {
  icon?: string;
  image?: string;
  title: string;
  description: string;
}

const resultModels: Array<ResultModel> = [
  {
    'image': './assets/media/avatars/Admin.jpg',
    'title': 'Chandrayana Putra',
    'description': 'Software Engineer'
  },
  {
    'image': './assets/media/avatars/User1.jpg',
    'title': 'Orange Fruit',
    'description': 'UI/UX Designer'
  },
  {
    'image': './assets/media/avatars/User2.jpg',
    'title': 'Ana Clark',
    'description': 'System Administrator'
  },
  {
    'image': './assets/media/avatars/User3.jpg',
    'title': 'Green Day',
    'description': 'User Tester'
  }
];

const recentlySearchedModels: Array<ResultModel> = [
  {
    'icon': './assets/media/icons/duotune/communication/com010.svg',
    'title': '"FitPro App Development',
    'description': '#84250'
  },
  {
    'icon': './assets/media/icons/duotune/finance/fin001.svg',
    'title': 'Shopix Mobile App',
    'description': '#45690'
  },
  {
    'icon': './assets/media/icons/duotune/graphs/gra002.svg',
    'title': '"Landing UI Design" Launch',
    'description': '#24005'
  }  
];
