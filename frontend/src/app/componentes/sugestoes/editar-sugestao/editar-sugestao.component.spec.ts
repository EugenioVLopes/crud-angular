import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSugestaoComponent } from './editar-sugestao.component';

describe('EditarSugestaoComponent', () => {
  let component: EditarSugestaoComponent;
  let fixture: ComponentFixture<EditarSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarSugestaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
