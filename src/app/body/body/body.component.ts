import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  data: Array<any>;
  constructor(){
    this.data = [
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' },
        { firstName: 'sdas', lastName: 'dsadasd', age: '65' },
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' },
        { firstName: 'sdas', lastName: 'dsadasd', age: '65' },
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' },
        { firstName: 'sdas', lastName: 'dsadasd', age: '65' },
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' },
        { firstName: 'sdas', lastName: 'dsadasd', age: '65' }
    ];
}
}

