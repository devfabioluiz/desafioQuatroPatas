import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasRegrasComponent } from './nossas-regras.component';

describe('NossasRegrasComponent', () => {
  let component: NossasRegrasComponent;
  let fixture: ComponentFixture<NossasRegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossasRegrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossasRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
