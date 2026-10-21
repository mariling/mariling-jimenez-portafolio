import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-education',
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class Education {}
