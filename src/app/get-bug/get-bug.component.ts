import { Component, OnInit } from '@angular/core';
import { BugService } from '../bug.service';
import { Bug } from '../Bug';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  bug: Bug = new Bug();
  constructor(private bugService: BugService) { }
  bugList: any;
  getBug() {
    let bugId = (<HTMLInputElement>document.getElementById('bugId')).value
    this.bugService.getBug(bugId).subscribe(response => {
      console.log(response);
      alert('Bug Listed .....')

    },
      error => {
        console.log(error);
        alert(error.statusText);

      }
    )

  }
  getBugs() {
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

  ngOnInit(): void {
  }

}
