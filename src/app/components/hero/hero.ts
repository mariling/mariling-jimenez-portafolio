import { TranslatePipe } from '@ngx-translate/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero { }
