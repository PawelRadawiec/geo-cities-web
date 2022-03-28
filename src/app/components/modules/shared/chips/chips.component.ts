import {
  AfterContentInit,
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true,
    },
  ],
})
export class ChipsComponent implements OnInit, ControlValueAccessor {
  @ViewChild(MatChipList) chipList: MatChipList;

  @Input() label: string;
  @Input() placeholder: string;

  values: string[] = [];

  onChange: (value: string[]) => void;
  onTouch: any;

  ngOnInit() {}

  writeValue(values: any) {
    this.values = values;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    const { value, chipInput } = event;
    if (value) {
      this.values.push(value);
      this.onChange(this.values);
      chipInput!.clear();
    }
  }

  removeKeyword(value: string) {
    this.values.splice(this.values.indexOf(value), 1);
    this.onChange(this.values);
  }
}
