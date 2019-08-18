import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private titleService: Title, private metaService: Meta) {

  }

  setMeta(config: { metaDesc?: string, metaImg?: string, title?: string }) {
    if (config.title) {
      this.metaService.updateTag({ property: 'og:title', content: config.title });
    }

    if (config.metaDesc) {
      this.metaService.updateTag({ name: 'description', content: config.metaDesc });
      this.metaService.updateTag({ property: 'og:description', content: config.metaDesc });
    }

    if (config.metaImg) {
      this.metaService.updateTag({ property: 'og:image', content: config.metaImg });
      this.metaService.updateTag({ name: 'twitter:image', content: config.metaImg });
    }

    document.dispatchEvent(new Event('prerender-ready'));
  }
}