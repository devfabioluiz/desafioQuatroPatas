import { Component, Input, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input() image!: string;
  @Input() name!: string;
  @Input() description!: string;
  pets: any[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPets().subscribe((data: any) => {
      this.pets = data;
    });
  }
}
