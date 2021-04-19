import { Component, OnInit } from '@angular/core';
import { BugService } from '../bug.service';
import { Bug } from '../Bug';
import { STATUS } from '../STATUS';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  bug: Bug = new Bug();
  constructor(private bugService: BugService) { }
  bugList: any;
  searchElement: any;
  responseList: Boolean;
  getBug() {
    let bugStatus = (<HTMLInputElement>document.getElementById('bugStatus')).value;
    let bugTitle = (<HTMLInputElement>document.getElementById('bugTitle')).value;
    let endpointURL = 'http://localhost:8080/bug/';

    if (Object.values(STATUS).includes(bugStatus)) {

      endpointURL = endpointURL + 'status/' + bugStatus;
      this.bugService.getBug(endpointURL).subscribe(response => {
        this.bugList = response;
        console.log(response);
        alert('Bug Listed .....')

      },
        error => {
          console.log(error);
          alert(error.statusText);

        }
      )
    }
    else {
      endpointURL = endpointURL + 'title/' + bugTitle;
      this.bugService.getBug(endpointURL).subscribe(response => {
        this.bugList = [response];
        console.log(response);
        alert('Bug Listed .....')

      },
        error => {
          console.log(error);
          alert(error.statusText);

        }
      )
    }



  }
  // getBugs() {

  // }

  ngOnInit(): void {
    this.bugService.getBugs().subscribe(response => {
      this.bugList = response;
      console.log(response);

    },
      error => {
        console.log(error);
        alert(error.statusText);

      }
    )
  }

}
