import { Component, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input()
  config: any;
  @Input()
  add: EventEmitter<any> = new EventEmitter();
  @Input()
  delete: EventEmitter<any> = new EventEmitter();

  public onAdd() {
    this.add.emit();
  }

  public onDelete() {
    this.delete.emit();
  }
}
