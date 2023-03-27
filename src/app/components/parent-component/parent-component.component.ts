import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent-component.component.html',
    styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
    message: string | undefined;
    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.message = "hello"
    }
    @ViewChild(ChildComponentComponent) child !: ChildComponentComponent;
    ngAfterViewInit() {
        this.cd.detectChanges();
        console.log(this.child.childData)
    }

}
