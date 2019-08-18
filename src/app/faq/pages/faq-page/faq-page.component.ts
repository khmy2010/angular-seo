import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.setMeta({
      title: 'FAQ'
    });
  }

}
