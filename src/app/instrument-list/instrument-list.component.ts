import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteCounterpartiesComponent } from '../invite-counterparties/invite-counterparties.component';
@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss',
})
export class InstrumentListComponent {
  inventoryCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  instruments = [
    {
      name: 'Acoustic Guitar',
      type: 'String',
      family: 'Guitar',
      description:
        'An acoustic guitar is a string instrument that produces sound through the vibration of strings. It does not require amplification to be heard, producing a natural, warm tone.',
      image: './assets/istockphoto-1397013109-612x612.jpg',
    },
    {
      name: 'Electric Guitar',
      type: 'String',
      family: 'Guitar',
      description:
        'An electric guitar uses pickups to convert the vibration of its strings into electrical signals. It requires amplification to be heard and offers a wide range of tones through various pickups and effects.',
      image: './assets/guitar-2925274_640.jpg',
    },
    {
      name: 'Violin',
      type: 'String',
      family: 'String',
      description:
        'The violin is a string instrument with four strings, usually tuned in perfect fifths. It is played by drawing a bow across the strings or by plucking them with the fingers.',
      image: './assets/photo-1602939444907-6e688c594a66.avif',
    },
    {
      name: 'Piano',
      type: 'Percussion',
      family: 'Keyboard',
      description:
        'The piano is a versatile keyboard instrument with a range of 88 keys. It produces sound by striking strings with hammers when keys are pressed. It is widely used in classical, jazz, and popular music.',
      image: './assets/images.jpeg',
    },
    {
      name: 'Drums',
      type: 'Percussion',
      family: 'Percussion',
      description:
        'Drums are a percussion instrument consisting of one or more membrane-covered shells or cylinders called heads, which are struck with the hand, stick, or brush.',
      image: './assets/drum.avif',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(index: any): void {
    this.dialog.open(InviteCounterpartiesComponent, {
      height: '400px',
      width: '600px',
      data: { selectedInstrument: index }
    });
  }
}
