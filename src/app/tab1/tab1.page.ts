import { Component } from '@angular/core';
import { PhotoService } from '../services/photo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public photoService: PhotoService) { }

  //Se ejecuta cada vez que regreso a la pestaña para mostrar las fotos guardadas
  async ionViewWillEnter() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();

}
}
