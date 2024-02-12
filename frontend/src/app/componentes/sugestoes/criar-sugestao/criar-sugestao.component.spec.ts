import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSugestaoComponent } from './criar-sugestao.component';

describe('CriarSugestaoComponent', () => {
  let component: CriarSugestaoComponent;
  let fixture: ComponentFixture<CriarSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarSugestaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
