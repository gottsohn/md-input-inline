import {Component, Input, Output, forwardRef, EventEmitter, ElementRef,
  ViewChild, Renderer, OnInit} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const MD_INPUT_INLINE_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdInputInlineComponent),
  multi: true
};

@Component({
  selector: 'md-input-inline',
  providers: [MD_INPUT_INLINE_CONTROL_VALUE_ACCESSOR],
  templateUrl: './md-input-inline.component.html',
  styleUrls: ['./md-input-inline.component.css']
})

export class MdInputInlineComponent implements ControlValueAccessor, OnInit {

  @ViewChild('mdInputInlineControl') mdInputInlineControl;
  @Output() public onSave: EventEmitter<any> = new EventEmitter();
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() items: any[] = [];
  @Input() itemIdKey: string;
  @Input() itemLabelKey: string;
  @Input() optgroupLabel: string;

  private _value: string = '';
  private preValue: string = '';
  editing: boolean = false;
  private typeIndex: number = 0;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  get value(): any { return this._value; };

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  getName(): string {
    let item = this.items.filter((item, idx) => {
      return this.itemIdKey ? item[this.itemIdKey] == this.value : this.value == item;
    })[0];

    if (item) {
      return this.itemLabelKey ? item[this.itemLabelKey] : item;
    } else {
      return 'None';
    }
  }

  constructor(element: ElementRef, private _renderer: Renderer) { }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; };

  edit(value) {
    this.preValue = value;
    this.editing = true;
    setTimeout(_ => {
      if (this.typeIndex === 0) {
        this._renderer.invokeElementMethod(this.mdInputInlineControl, 'focus', []);
      }
    });
  }

  onSubmit(value) {
    this.onSave.emit(value);
    this.editing = false;
  }

  cancel(value: any) {
    this._value = this.preValue;
    this.editing = false;
  }

  ngOnInit() {
    switch (this.type) {
      case 'text':
      case 'number':
      case 'date':
        this.typeIndex = 0;
        break;
      case 'select':
        this.typeIndex = 1;
        break;
      default:
        this.typeIndex = 0;
        break;
    }
  }
}
