import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() image!: string;
    @Input() name!: string;
    @Input() description!: string;
    public items: Pet[] = [];
    public isFavourite: boolean = false;
  
    constructor(private petService: PetService, public dialog: MatDialog) {}

  
    ngOnInit() {
      this.petService.getPets().subscribe((data: Pet[]) => {
        this.items = data;
      });
    }
  
    favourite(){
      this.dialog.open(ModalComponent, {
        data: {
          imageSrc: 'assets/AdoptModalDog2x.png',
          imageAlt: 'Girl with dog',
          title: 'VOCÊ GANHOU UM NOVO AMIGUINHO!',
          message: 'Obrigado por sua adoção, ficamos felizes por você e por ele!',
          backgroundColor: '#91d88b'
        }
      });
    }
  
    adopt(){
      this.dialog.open(ModalComponent, {
        data: {
          imageSrc: 'assets/FavModalDog2x.png',
          imageAlt: 'Boy with dog',
          title: 'FAVORITADO COM AMOR',
          message: 'Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!',
          backgroundColor: '#D88BB9'
        }
      });
    }
}
