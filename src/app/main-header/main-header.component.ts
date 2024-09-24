import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  constructor(private translationService: TranslationService) {}

  translateText(language: string): void {
    this.translationService.translateText(language);
  }

}
