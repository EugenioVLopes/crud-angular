import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSugestoesComponent } from './listar-sugestoes.component';

describe('ListarSugestoesComponent', () => {
  let component: ListarSugestoesComponent;
  let fixture: ComponentFixture<ListarSugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSugestoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
