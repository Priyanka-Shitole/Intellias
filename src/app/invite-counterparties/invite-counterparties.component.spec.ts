import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCounterpartiesComponent } from './invite-counterparties.component';

describe('InviteCounterpartiesComponent', () => {
  let component: InviteCounterpartiesComponent;
  let fixture: ComponentFixture<InviteCounterpartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteCounterpartiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteCounterpartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
