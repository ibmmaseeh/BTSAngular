import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
  title:string="Create Bug";
  bug:Bug=new Bug();
  BugArray:Bug[]=[];
  constructor(private bugService:BugService) { }
  save(){
    const promise=this.bugService.save(this.bug);
    promise.subscribe(response =>{
      console.log(response);
      alert('user added..');
      this.BugArray.push(Object.assign({},this.bug));
    },
    error=> {
      console.log(error);
      alert("error Happened...");
    })
  }
  ngOnInit(): void {
  }

}
