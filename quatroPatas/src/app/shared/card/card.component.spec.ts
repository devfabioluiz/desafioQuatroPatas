import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { PetService } from 'src/app/services/pet.service';
import { CardComponent } from './card.component';
import { Pet } from 'src/app/models/pet.model';
import { ModalComponent } from '../modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let petServiceSpy: jasmine.SpyObj<PetService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const petServiceMock = jasmine.createSpyObj('PetService', ['getPets']);
    const matDialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: PetService, useValue: petServiceMock },
        { provide: MatDialog, useValue: matDialogMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    petServiceSpy = TestBed.inject(PetService) as jasmine.SpyObj<PetService>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPets on ngOnInit', () => {
    const mockPets: Pet[] = [
      { id: 'dog-mock', url: 'https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg', width: 1080, height: 1350 }
    ];
    petServiceSpy.getPets.and.returnValue(of(mockPets));

    component.ngOnInit();

    expect(petServiceSpy.getPets).toHaveBeenCalled();
    expect(component.items).toEqual(mockPets);
  });

  it('open adopt modal', () => {
    component.favourite();

    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: {
        imageSrc: 'assets/AdoptModalDog2x.png',
        imageAlt: 'Girl with dog',
        title: 'VOCÊ GANHOU UM NOVO AMIGUINHO!',
        message: 'Obrigado por sua adoção, ficamos felizes por você e por ele!',
        backgroundColor: '#91d88b'
      }
    });
  });

  it('open favourite modal', () => {
    component.adopt();

    expect(dialogSpy.open).toHaveBeenCalledWith(ModalComponent, {
      data: {
        imageSrc: 'assets/FavModalDog2x.png',
        imageAlt: 'Boy with dog',
        title: 'FAVORITADO COM AMOR',
        message: 'Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!',
        backgroundColor: '#D88BB9'
      }
    });
  });
});
