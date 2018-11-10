import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    component.config.title = "Testtitle";
    expect(component.config.title).toBeDefined();
  });
});
