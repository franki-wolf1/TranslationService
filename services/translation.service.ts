import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { spanish } from './espanish';
import { english } from './english';

@Injectable({
  providedIn: 'root',
})

export class TranslationService {

  private translations: any = {};
  private currentLanguage = 'es';
  private translationsSubject = new BehaviorSubject<any>(this.translations[this.currentLanguage]);
  private currentLanguageSubject = new BehaviorSubject<string>(this.currentLanguage);

  constructor() {
    this.loadTranslations('es');
  }

  activateLenguaje(language: string) {
    if (language !== 'es') {
        
      this.translations['en'] = english
    }else {  

      this.translations['es'] = spanish
    }
  }

  loadTranslations(language: string) { 
    this.activateLenguaje(language);

    this.currentLanguage = language;
    this.translationsSubject.next(this.translations[language]);
    this.currentLanguageSubject.next(language);
  }

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key];
  }

  getTranslations(): Observable<any> {
    return this.translationsSubject.asObservable();
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguageSubject.asObservable();
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    
    this.activateLenguaje(language);
    this.translationsSubject.next(this.translations[language]);
    this.currentLanguageSubject.next(language);
  }

} 