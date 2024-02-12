import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirSugestaoComponent } from './excluir-sugestao.component';

describe('ExcluirSugestaoComponent', () => {
  let component: ExcluirSugestaoComponent;
  let fixture: ComponentFixture<ExcluirSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirSugestaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
