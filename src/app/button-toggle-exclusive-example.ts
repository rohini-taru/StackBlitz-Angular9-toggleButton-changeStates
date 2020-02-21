import {Component} from '@angular/core';

/**
 * @title Exclusive selection
 */
@Component({
  selector: 'button-toggle-exclusive-example',
  templateUrl: 'button-toggle-exclusive-example.html',
  styleUrls: ['button-toggle-exclusive-example.css'],
})
export class ButtonToggleExclusiveExample {

groupChange(event: Event) {
  console.log(event.target);
}

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */