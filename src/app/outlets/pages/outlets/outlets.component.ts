import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss']
})
export class OutletsComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.setMeta({
      title: 'FAQ'
    });
  }

}
