import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-languages',
  styleUrl: './languages.scss',
  templateUrl: './languages.html',
})
export class Languages {}
