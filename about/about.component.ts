import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  translations: any;
  currentLanguage: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    });
    this.translationService.getCurrentLanguage().subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  getTranslation(key: string): string {
    return this.translations[key];
  }

  changeLanguage(language: string) {
    this.translationService.changeLanguage(language);
    console.log(language);
    
  }
  
}
