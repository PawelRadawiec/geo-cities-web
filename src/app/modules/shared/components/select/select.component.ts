import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() data: any[] = [];
  @Input() bindBy: string;
  @Input() bindLabel: string;
  @Input() label: string;
  @Input() placeholder: string;

  value: any;
  onChange: (value: any) => void;
  onTouch: (value: any) => void;

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  selectionChange(event: MatSelectChange) {
    this.onChange(event.value);
  }
}
