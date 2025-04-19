import { Component, TemplateRef, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  @ViewChild('tableTemplate') tableTemplate!: TemplateRef<any>;

  showTable() {
    this.container.clear();
    this.container.createEmbeddedView(this.tableTemplate);
  }

  clearTable() {
    this.container.clear();
  }
}
