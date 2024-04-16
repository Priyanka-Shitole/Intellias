import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { counterParties } from '../../assets/counter-parties';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailComponent } from '../email/email.component';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewportScroller } from '@angular/common';
import { SingleSelectComponent } from '../single-select/single-select.component';
interface name {
  first: string;
  last: string;
}
interface counterindivisualNode {
  _id: string;
  picture: string;
  name: name;
  company: string;
  email: string;
  phone: string;
  groups: string[];
  isSelected: boolean;
}

interface TestNode {
  name: string;
  id?: number;
  isSelected: boolean;
  children?: counterindivisualNode[];
}

@Component({
  selector: 'app-invite-counterparties',
  templateUrl: './invite-counterparties.component.html',
  styleUrl: './invite-counterparties.component.scss',
})
export class InviteCounterpartiesComponent implements OnInit {
  // @ViewChild('singleSelectComponent')
  // singleSelectComponent!: ElementRef<SingleSelectComponent>;
  @ViewChild('singleSelectComponent')
  singleSelectComponent!: SingleSelectComponent;


  test_data: TestNode[] = [
    {
      name: 'Group1',
      id: 1,
      isSelected: false,
      children: [
        {
          _id: '1',
          picture: 'https://example.com/picture1.jpg',
          name: {
            first: 'John',
            last: 'Doe',
          },
          company: 'ABC Inc.',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '10',
          isSelected: false,
          picture: 'https://example.com/picture10.jpg',
          name: {
            first: 'Amanda',
            last: 'Rodriguez',
          },
          company: 'UVW Corporation',
          email: 'amanda.rodriguez@example.com',
          phone: '+1666555444',
          groups: ['Group1', 'Group2'],
        },
        {
          _id: '9',
          picture: 'https://example.com/picture9.jpg',
          name: {
            first: 'Matthew',
            last: 'Taylor',
          },
          company: 'QRS Inc.',
          email: 'matthew.taylor@example.com',
          phone: '+1999888777',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
        {
          _id: '7',
          picture: 'https://example.com/picture7.jpg',
          name: {
            first: 'David',
            last: 'Martinez',
          },
          company: 'GHI Solutions',
          email: 'david.martinez@example.com',
          phone: '+1777888999',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '6',
          picture: 'https://example.com/picture6.jpg',
          name: {
            first: 'Sarah',
            last: 'Garcia',
          },
          company: 'VWX Enterprises',
          email: 'sarah.garcia@example.com',
          phone: '+1666999888',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
        {
          _id: '3',
          picture: 'https://example.com/picture3.jpg',
          name: {
            first: 'Michael',
            last: 'Johnson',
          },
          company: 'LMN Co.',
          email: 'michael.johnson@example.com',
          phone: '+1122334455',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
        {
          _id: '4',
          picture: 'https://example.com/picture4.jpg',
          name: {
            first: 'Emily',
            last: 'Brown',
          },
          company: 'PQR Ltd.',
          email: 'emily.brown@example.com',
          phone: '+1555666777',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Group2',
      isSelected: false,
      children: [
        {
          _id: '1',
          picture: 'https://example.com/picture1.jpg',
          name: {
            first: 'John',
            last: 'Doe',
          },
          company: 'ABC Inc.',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '10',
          picture: 'https://example.com/picture10.jpg',
          name: {
            first: 'Amanda',
            last: 'Rodriguez',
          },
          company: 'UVW Corporation',
          email: 'amanda.rodriguez@example.com',
          phone: '+1666555444',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '7',
          picture: 'https://example.com/picture7.jpg',
          name: {
            first: 'David',
            last: 'Martinez',
          },
          company: 'GHI Solutions',
          email: 'david.martinez@example.com',
          phone: '+1777888999',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '2',
          picture: 'https://example.com/picture2.jpg',
          name: {
            first: 'Jane',
            last: 'Smith',
          },
          company: 'XYZ Corp.',
          email: 'jane.smith@example.com',
          phone: '+1987654321',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
        {
          _id: '4',
          picture: 'https://example.com/picture4.jpg',
          name: {
            first: 'Emily',
            last: 'Brown',
          },
          company: 'PQR Ltd.',
          email: 'emily.brown@example.com',
          phone: '+1555666777',
          groups: ['Group1', 'Group2'],
          isSelected: false,
        },
        {
          _id: '5',
          picture: 'https://example.com/picture5.jpg',
          name: {
            first: 'Daniel',
            last: 'Wilson',
          },
          company: 'STU Corp.',
          email: 'daniel.wilson@example.com',
          phone: '+1444333222',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
        {
          _id: '8',
          picture: 'https://example.com/picture8.jpg',
          name: {
            first: 'Jessica',
            last: 'Lee',
          },
          company: 'NOP Limited',
          email: 'jessica.lee@example.com',
          phone: '+1888999000',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Group3',
      isSelected: false,
      children: [
        {
          _id: '2',
          picture: 'https://example.com/picture2.jpg',
          name: {
            first: 'Jane',
            last: 'Smith',
          },
          company: 'XYZ Corp.',
          email: 'jane.smith@example.com',
          phone: '+1987654321',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
        {
          _id: '3',
          picture: 'https://example.com/picture3.jpg',
          name: {
            first: 'Michael',
            last: 'Johnson',
          },
          company: 'LMN Co.',
          email: 'michael.johnson@example.com',
          phone: '+1122334455',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
        {
          _id: '5',
          picture: 'https://example.com/picture5.jpg',
          name: {
            first: 'Daniel',
            last: 'Wilson',
          },
          company: 'STU Corp.',
          email: 'daniel.wilson@example.com',
          phone: '+1444333222',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
        {
          _id: '6',
          picture: 'https://example.com/picture6.jpg',
          name: {
            first: 'Sarah',
            last: 'Garcia',
          },
          company: 'VWX Enterprises',
          email: 'sarah.garcia@example.com',
          phone: '+1666999888',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
        {
          _id: '8',
          picture: 'https://example.com/picture8.jpg',
          name: {
            first: 'Jessica',
            last: 'Lee',
          },
          company: 'NOP Limited',
          email: 'jessica.lee@example.com',
          phone: '+1888999000',
          groups: ['Group2', 'Group3'],
          isSelected: false,
        },
        {
          _id: '9',
          picture: 'https://example.com/picture9.jpg',
          name: {
            first: 'Matthew',
            last: 'Taylor',
          },
          company: 'QRS Inc.',
          email: 'matthew.taylor@example.com',
          phone: '+1999888777',
          groups: ['Group1', 'Group3'],
          isSelected: false,
        },
      ],
    },
  ];
  treeControl = new NestedTreeControl<TestNode>((node: any) => node.children);
  dataSource = new MatTreeNestedDataSource<TestNode>();

  childIsSelectedList: any = [];

  selections: any = [];
  selectedChildren: any = [];
  // [START] possibly for search feature...? //
  nestedSelectControl = new FormControl();
  test_data_options!: Observable<TestNode[]>;

  selectedParties: any = [];
  counterPartiesDataArray: any[] = [];
  counterPartiesGroup: any[] = [
    { id: 1, group: 'Group1' },
    { id: 2, group: 'Group2' },
    { id: 3, group: 'Group3' },
  ];
  counterParties: any = [];

  selectedOption: string = '';
  selectedGroup: string = '';
  constructor(
    public dialogRef: MatDialogRef<InviteCounterpartiesComponent>,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef
  ) {
    this.dataSource.data = this.test_data;
  }
  hasChild = (_: number, node: TestNode) =>
    !!node.children && node.children.length > 0;
  ngOnInit() {
    this.counterPartiesDataArray = counterParties; // Assign the imported array to a local variable
  }
  setAll(selected: boolean, node: any) {
    if (selected == true) {
      if (node.children) {
        this.counterParties.push(node.children);
      } else {
        let arr: any = [];
        arr = arr.push(node);
        this.counterParties = [...arr, ...this.counterParties];
      }
    }
  }

  onOptionSelected(selectedOption: any) {
    this.selectedParties = [...this.selectedParties, { ...selectedOption }];
    this.selectedParties = Array.from(
      new Set(this.selectedParties.map(JSON.stringify))
    ).map((item: any) => JSON.parse(item) as any);
    this.selectedParties = this.selectedParties;
  }
  sendInvite() {
    let arr = this.dataSource.data.forEach((group) => {
      if (group.children) {
        group.children.forEach((child) => {
          if (child.isSelected) {
            this.selectedChildren.push(child);
          }
        });
      }
    });
   
    this.selectedParties = this.singleSelectComponent.selectedParties;
    // this.selectedParties = this.multiSelectComponent.selections;
    let partiesData = this.formValid([
      ...this.selectedParties,
      ...this.selectedChildren,
    ]);

    if (partiesData.length > 0) {
      this.dialog.open(EmailComponent, {
        width: '800px',
        data: {
          selectedParties: [...this.selectedParties, ...this.selectedChildren],
          instrumentData: this.data,
        },
      });
      this.dialogRef.close();
    } else {
      this._snackBar.open('Please select atleast one contact!', 'Close', {
        duration: 3000,
        verticalPosition: 'top', // Duration the snackbar should be displayed (in milliseconds)
      });
    }
  }

  formValid(selectedOption: any) {
    return Array.from(new Set(selectedOption.map(JSON.stringify))).map(
      (item: any) => JSON.parse(item) as any
    );
  }

  selectionToggleLeaf(isChecked: boolean, node: any) {
    node.isSelected = isChecked;
    if (node.isSelected && this.selections.includes(node.value)) {
      this.selections.push(node.value);
    } else if (!node.isSelected && this.selections.includes(node.value)) {
      let deleteIndex = this.selections.indexOf(node.value);
      this.selections.splice(deleteIndex, 1);
    }
  }

  selectionToggle(isChecked: boolean, node: any) {
    node.isSelected = isChecked;
    if (node.isSelected && !this.selections.includes(node.value)) {
      this.selections.push(node.value);
    } else if (!node.isSelected && this.selections.includes(node.value)) {
      let deleteIndex = this.selections.indexOf(node.value);
      this.selections.splice(deleteIndex, 1);
    }
    if (node.children) {
      node.children.forEach((child: any) => {
        this.selectionToggle(isChecked, child);
      });
    }
  }

  descendantsAllSelected(node: TestNode) {
    let childIsSelectedList: any = [];
    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        childIsSelectedList.push(child.isSelected);
      });
    }

    // scans to see if children are all true
    if (
      childIsSelectedList.length &&
      childIsSelectedList.every((item: any) => {
        return item;
      })
    ) {
      if (!this.selections.includes(node.name)) {
        this.selections.push(node.name);
      }
      return true;
    }

    if (node.children && node.children.length) {
      node.children.forEach((child: any) => {
        this.descendantsAllSelected(child);
      });
    }

    // Add a return statement at the end of the function
    return false;
  }
  addChildSelection(node: TestNode) {
    if (node.children && node.children.length) {
      node.children.forEach((child: any) => {
        this.childIsSelectedList.push(child.isSelected);
        this.addChildSelection(child);
      });
    }
  }

  checkDescPartSelection(node: TestNode) {
    this.childIsSelectedList = [];

    this.addChildSelection(node);

    if (
      this.childIsSelectedList.includes(false) &&
      !this.childIsSelectedList.every((item: any) => {
        return !item;
      })
    ) {
      return true;
    }

    return false;
  }

  filterChanged(inputValue: any) {}
}
