import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {}
