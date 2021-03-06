import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {


  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('error wesh' + error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }
  
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
