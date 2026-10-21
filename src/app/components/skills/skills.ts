import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {}
