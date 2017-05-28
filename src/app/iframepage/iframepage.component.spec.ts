/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IframepageComponent } from './iframepage.component';

describe('IframepageComponent', () => {
  let component: IframepageComponent;
  let fixture: ComponentFixture<IframepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
