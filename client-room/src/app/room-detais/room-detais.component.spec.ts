import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetaisComponent } from './room-detais.component';

describe('RoomDetaisComponent', () => {
  let component: RoomDetaisComponent;
  let fixture: ComponentFixture<RoomDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDetaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
