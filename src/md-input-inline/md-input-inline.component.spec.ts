/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MdInputInlineComponent } from './md-input-inline.component';

describe('Component: MdInputInline', () => {
  let component: MdInputInlineComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MdInputInlineComponent
      ],
    });
  });

  it('should create an instance', () => {
    component = TestBed.createComponent(MdInputInlineComponent)
      .debugElement.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should contain value and onChange event object', () => {
    expect(component.value).toBeDefined();
    expect(component.onChange).toBeDefined();
  });

  it('should not call onChange when using writeValue', () => {
    spyOn(component, 'onChange');
    component.writeValue('Godson');
    expect(component.value).toBe('Godson');
    expect(component.onChange).not.toHaveBeenCalled();
  });

  it('should call onChange when value changes', () => {
    component = TestBed.createComponent(MdInputInlineComponent)
      .debugElement.componentInstance;

    spyOn(component, 'onChange');
    expect(component.onChange).not.toHaveBeenCalled();
    component.value = 'Godson';
    expect(component.value).toBe('Godson');
    expect(component.onChange).toHaveBeenCalled();
  });

  it('should start editing when .edit is called', () => {
    expect(component.getEditing()).toBeFalsy();
    component.edit('godson');
    expect(component.getEditing()).toBeTruthy();
  });

  it('should value and preValue should be different', () => {
    expect(component.getPreValue()).not.toBe(component.value);
  });
});
