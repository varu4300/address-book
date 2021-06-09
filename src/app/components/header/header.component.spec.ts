import { of } from 'rxjs';
import { SharedService } from './../../services/shared/shared.service';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Page } from 'src/app/enum';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(SharedService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be Home page', fakeAsync(() => {
    spyOn(service, 'getPage').and.callFake(() => {
      return of(Page.HOME)
    })

    component.ngOnInit();
    tick(100);
    expect(component.page).toEqual(0);
  }))

  it('should be Detail page', fakeAsync(() => {
    spyOn(service, 'getPage').and.callFake(() => {
      return of(Page.DETAILS)
    })

    component.ngOnInit();
    tick(100);
    expect(component.page).toEqual(1);
  }))

});
