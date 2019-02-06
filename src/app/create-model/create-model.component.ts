import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  layer_nums: any;
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  ngOnInit() {
  }

  onLayerNumsChange(value: any) {
    this.layer_nums = value;
  }


  addFieldValue() {
    if (this.fieldArray.length <= 6) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    this.updateArray();
  }

  updateArray() {
    for (let i = 0, flag = true, len = this.fieldArray.length; i < len; flag ? i++ : i) {
      if (this.fieldArray[i] && this.fieldArray[i].name == null) {
        this.fieldArray.splice(i, 1);
        flag = false;
      } else {
        flag = true;
      }

    }
  }

}