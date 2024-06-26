import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// interface TestNode {
//   display: string;
//   value: string;
//   children?: TestNode[];
//   isSelected: boolean;
// }
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Intellias';
  // test_data: TestNode[] = [
  //   {
  //     display: 'Fruits',
  //     value: 'Fruits',
  //     isSelected: false,
  //     children: [
  //       { display: 'Apple', value: 'Apple', isSelected: false },
  //       { display: 'Banana', value: 'Banana', isSelected: false },
  //       { display: 'Fruit loops', value: 'Fruit loops', isSelected: false },
  //     ],
  //   },
  //   {
  //     display: 'Vegetables',
  //     value: 'Vegetables',
  //     isSelected: false,
  //     children: [
  //       {
  //         display: 'Greens',
  //         value: 'Greens',
  //         isSelected: false,
  //         children: [
  //           { display: 'Broccoli', value: 'Broccoli', isSelected: false },
  //           {
  //             display: 'Brussels sprouts',
  //             value: 'Brussels sprouts',
  //             isSelected: false,
  //           },
  //           { display: 'Spinach', value: 'Spinach', isSelected: false },
  //         ],
  //       },
  //       {
  //         display: 'Non-greens',
  //         value: 'Non-greens',
  //         isSelected: false,
  //         children: [
  //           { display: 'Pumpkins', value: 'Pumpkins', isSelected: false },
  //           { display: 'Carrots', value: 'Carrots', isSelected: false },
  //         ],
  //       },
  //     ],
  //   },
  // ];
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
  treeControl = new NestedTreeControl<TestNode>((node:any) => node.children);
  dataSource = new MatTreeNestedDataSource<TestNode>();

  childIsSelectedList: any = [];

  selections: any = [];

  // [START] possibly for search feature...? //
  nestedSelectControl = new FormControl();
  test_data_options!: Observable<TestNode[]>;

  // _filterTree(value: string) {
  //   const filterValue = value.toLowerCase();
  //   const result = this.test_data.filter((nodes: any) => {
  //     if (nodes) {
  //       console.log('logging fiter node: ', nodes);
  //       return true;
  //     }
  //   });
  //   return result;
  // }
  // [END] possibly for search feature...? //

  constructor() {
    this.dataSource.data = this.test_data;
  }

  hasChild = (_: number, node: TestNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit() {
    // this.test_data_options = this.nestedSelectControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filterTree(value))
    // );
  }

  selectionToggleLeaf(isChecked: boolean, node: any) {
    // console.log('leaf selected: ', node);
    node.isSelected = isChecked;
    if (node.isSelected && this.selections.includes(node.value)) {
      this.selections.push(node.value);
      console.log('selections list: ', this.selections);
    } else if (!node.isSelected && this.selections.includes(node.value)) {
      let deleteIndex = this.selections.indexOf(node.value);
      this.selections.splice(deleteIndex, 1);
    }
  }

  selectionToggle(isChecked: boolean, node: any) {
    // console.log('branch node selected: ', node);
    node.isSelected = isChecked;
    if (node.isSelected && !this.selections.includes(node.value)) {
      this.selections.push(node.value);
      console.log('selections list: ', this.selections);
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

  // descendantsAllSelected(node: TestNode) {
  //   let childIsSelectedList: any = [];
  //   if (node.children && node.children.length) {
  //     node.children.forEach((child: any) => {
  //       childIsSelectedList.push(child.isSelected);
  //     });
  //   }

  //   // scans to see if children are all true
  //   if (
  //     childIsSelectedList.length &&
  //     childIsSelectedList.every((item: any) => {
  //       return item;
  //     })
  //   ) {
  //     console.log('All Selected for node: ', node);
  //     console.log('Child isSelected List: ', childIsSelectedList);
  //     if (!this.selections.includes(node.value)) {
  //       this.selections.push(node.value);
  //       // console.log('selections list: ', this.selections)
  //     }
  //     return true;
  //   }

  //   if (node.children && node.children.length) {
  //     node.children.forEach((child: any) => {
  //       this.descendantsAllSelected(child);
  //     });
  //   }
  // }
  descendantsAllSelected(node:TestNode) {
    let childIsSelectedList:any = [];
    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        childIsSelectedList.push(child.isSelected);
      });
    }
  
    // scans to see if children are all true
    if (
      childIsSelectedList.length &&
      childIsSelectedList.every((item:any) => {
        return item;
      })
    ) {
      console.log('All Selected for node: ', node);
      console.log('Child isSelected List: ', childIsSelectedList);
      if (!this.selections.includes(node.name)) {
        this.selections.push(node.name);
        // console.log('selections list: ', this.selections)
      }
      return true;
    }
  
    if (node.children && node.children.length) {
      node.children.forEach((child:any) => {
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

  // checkDescPartSelection(node: TestNode) {
  //   this.childIsSelectedList = [];

  //   this.addChildSelection(node);
  //   // scans to see if children contain any false, but not all false
  //   console.log('this.childSelectedList: ', this.childIsSelectedList);
  //   if (
  //     this.childIsSelectedList.includes(false) &&
  //     !this.childIsSelectedList.every((item: any) => {
  //       return !item;
  //     })
  //   ) {
  //     // let deleteIndex = this.selections.indexOf(node.value);
  //     // this.selections.splice(deleteIndex, 1);
  //     return true;
  //   }
  // }
  checkDescPartSelection(node: TestNode) {
    this.childIsSelectedList = [];
  
    this.addChildSelection(node);
    // scans to see if children contain any false, but not all false
    console.log('this.childSelectedList: ', this.childIsSelectedList);
    if (
      this.childIsSelectedList.includes(false) &&
      !this.childIsSelectedList.every((item: any) => {
        return !item;
      })
    ) {
      // let deleteIndex = this.selections.indexOf(node.value);
      // this.selections.splice(deleteIndex, 1);
      return true;
    }
  
    // Add a return statement at the end of the function
    return false;
  }

  filterChanged(inputValue: any) {
    console.log('filtering for...', inputValue);
  }
}
