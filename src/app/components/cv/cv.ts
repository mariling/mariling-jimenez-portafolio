import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-cv',
  styleUrl: './cv.scss',
  templateUrl: './cv.html',
})
export class Cv {}
