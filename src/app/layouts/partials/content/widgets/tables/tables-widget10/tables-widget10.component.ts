import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from '../../../../../../modules/auth';
import { WidgetsService } from '../../widgets.service';

@Component({
  selector: 'app-tables-widget10',
  templateUrl: './tables-widget10.component.html',
})
export class TablesWidget10Component implements OnInit {
  apiDatas: any = {};
  apiUserDatas: any[] = [];
  user$: Observable<UserType>;

  constructor(
    private auth: AuthService,
    private widgetService: WidgetsService
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    this.fetchGits();
    this.fetchUserRepo();
  }

  fetchGits(): void {
    this.widgetService.getPublicGits().subscribe(
      (response) => {
        this.apiDatas = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  fetchUserRepo(): void {
    this.user$.subscribe(
      (userObservable) => {
        const userRepo = userObservable?.username;
        this.widgetService.getUserRepos(userRepo).subscribe(
          (response) => {
            const datas = response;
            Object.values(datas).forEach(value => {
              this.apiUserDatas = value;
              console.log(this.apiUserDatas);
            })
          },
          (error) => {
            console.log(error);
          }
        )
    });
  }
}
