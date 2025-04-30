import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  private componentRef: ComponentRef<DynamicComponent> | null = null;

  showTable() {
    this.container.clear();
    this.componentRef = this.container.createComponent(DynamicComponent);
  }

  clearTable() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.container.clear();
  }
}
