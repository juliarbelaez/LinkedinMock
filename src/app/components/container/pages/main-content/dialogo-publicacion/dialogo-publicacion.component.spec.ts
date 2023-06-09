import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPublicacionComponent } from './dialogo-publicacion.component';

describe('DialogoPublicacionComponent', () => {
  let component: DialogoPublicacionComponent;
  let fixture: ComponentFixture<DialogoPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoPublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
