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
    @ViewChild('mdTextareaInlineControl') mdTextareaInlineControl;
    @ViewChild('mdSelectInlineControl') mdSelectInlineControl;
    @Output() public onSave: EventEmitter<any> = new EventEmitter();
    @Input() label: string = '';
    @Input() min: number = -9999;
    @Input() max: number = 99999999;
    @Input() minlength: number = 0;
    @Input() maxlength: number = 2555;
    @Input() type: string = 'text';
    @Input() required: boolean = false;
    @Input() items: any[] = [];
    @Input() focus: Function = _ => { };
    @Input() blur: Function = _ => { };
    @Input() pattern: string = null;
    @Input() itemIdKey: string;
    @Input() itemLabelKey: string;
    @Input() optgroupLabel: string;
    @Input() errorLabel: string = 'Invalid input value';
    @Input() editLabel: string = 'Click to edit';
    @Input() disabled: boolean = false;
    @Input() param: any = {
      $error: false
    };

    private _value: string = '';
    private preValue: string = '';
    private editing: boolean = false;
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
        return this.itemIdKey ? item[this.itemIdKey] == this.value :
          this.value == item;
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

    hasError() {
      if (this.typeIndex < 2) {
        const exp = new RegExp(this.pattern);
        if (!this.required && !this.value) {
          return false;
        } else if (this.pattern && !exp.test(this.value)) {
          return true;
        } else {
          return false;
        }
      }
    }

    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void { this.onTouched = fn; };

    onBlur($event: Event) {
      this.param.$error = this.hasError();
      if (this.param.$error) {
        return false;
      }

      this.blur();
      this.editing = false;
    }

    edit(value) {
      if (this.disabled) {
        return;
      }

      this.preValue = value;
      this.editing = true;
      setTimeout(_ => {
        switch (this.typeIndex) {
          case 0:
            this._renderer.invokeElementMethod(this.mdInputInlineControl,
              'focus', []);
            break;
          case 1:
            this._renderer.invokeElementMethod(this.mdTextareaInlineControl,
              'focus', []);
            break;
          case 2:
            this.mdSelectInlineControl.nativeElement.focus();
            break;
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
        case 'textarea':
          this.typeIndex = 1;
          break;
        case 'select':
          this.typeIndex = 2;
          break;
        default:
          this.typeIndex = 0;
          break;
      }
    }
}
