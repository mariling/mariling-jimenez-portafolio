import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {}
