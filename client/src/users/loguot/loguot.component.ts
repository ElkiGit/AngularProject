import { Component } from '@angular/core';

@Component({
  selector: 'app-loguot',
  standalone: true,
  imports: [],
  templateUrl: './loguot.component.html',
  styleUrl: './loguot.component.css'
})
export class LoguotComponent {
 ngOnInit(){
  sessionStorage.clear();
 }
}
