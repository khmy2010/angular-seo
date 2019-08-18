import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.setMeta({
      title: 'Home Page'
    });
  }

}
