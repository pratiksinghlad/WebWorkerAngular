import { ServerapiService } from './service/serverapiService';
import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 worker;
 timerCount = '0';
 userList:any =[];
  constructor(private serverapiService: ServerapiService){ }

  ngOnInit(): void {
}

startWorker() {
  this.getData();
  if (typeof Worker !== 'undefined') {
    // Create a new
    this.worker = new Worker('./worker/app.worker', { type: 'module' });
    this.worker.onmessage = ({ data }) => {
      this.timerCount = data;

    };
    } else {
    this.timerCount = 'Sorry, your browser does not support Web Workers...';
  }
}

getData()
{
  // get api data
  this.serverapiService.getUser().subscribe((data) => this.userList = data);
}

 stopWorker() {
  this.worker.terminate();
  this.worker = undefined;
  this.timerCount = '0';
  this.userList = [];
}

}
