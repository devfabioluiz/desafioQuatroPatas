import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PetService } from './pet.service';
import { Pet } from '../models/pet.model';
import { HttpHeaders } from '@angular/common/http';

describe('PetService', () => {
  let service: PetService;
  let httpMock: HttpTestingController;

  const mockApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=';
  const mockApiKey = 'live_HkeCUqUBY0uOmd8NWfWjQD37vrWnFPipmdgnVWrDWJW0AZC8V3jZgmOoBhxkVaN6';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PetService]
    });

    service = TestBed.inject(PetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve pets data from the API via GET', () => {
    const mockPets: Pet[] = [
      { id: 'dog-mock1', url: 'https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg', width: 1080, height: 1350 },
      { id: 'dog-mock', url: 'https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg', width: 1080, height: 1350 }
    ];

    service.getPets().subscribe((pets) => {
      expect(pets.length).toBe(2);
      expect(pets).toEqual(mockPets);
    });

    const req = httpMock.expectOne(`${mockApiUrl}${mockApiKey}`);
    expect(req.request.method).toBe('GET');

    const expectedHeaders = new HttpHeaders({
      'X-Api-Key': mockApiKey,
      'Content-Type': 'application/json'
    });
    expect(req.request.headers).toEqual(expectedHeaders);

    req.flush(mockPets);
  });
});
