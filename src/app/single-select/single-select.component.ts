import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss',
  // encapsulation: ViewEncapsulation.None ,
})
export class SingleSelectComponent implements OnInit {
  @Input() counterPartiesDataArray: any;
  
  selectedOption: string = '';
  
  selectedParties: any = [];
  ngOnInit(): void {
    console.log('input',this.counterPartiesDataArray)
  }
  onOptionSelected(selectedOption: any) {
    this.selectedParties = [...this.selectedParties, { ...selectedOption }];
    this.selectedParties = Array.from(
      new Set(this.selectedParties.map(JSON.stringify))
    ).map((item: any) => JSON.parse(item) as any);
    this.selectedParties = this.selectedParties;
  }
  getSelectedParties(){
    return this.selectedParties;
  }
}
