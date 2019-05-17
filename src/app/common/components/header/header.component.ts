import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() public title = "Recipes";
  @Output()
  add: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  public onAdd() {
    this.add.emit();
  }

  public onDelete() {
    this.delete.emit();
  }
}
