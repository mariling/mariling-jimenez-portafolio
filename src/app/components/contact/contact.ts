import { TranslatePipe } from '@ngx-translate/core';
import {Component} from '@angular/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {}
