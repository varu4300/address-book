import {  of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from './home.component';
import { User } from '../../classes/user';
import { Response } from '../../classes/response';
import { UserService } from './../../services/user/user.service';
import { ListModule } from './../../components/list/list.module';
import { AlphaPaginationModule } from './../../components/alpha-pagination/alpha-pagination.module';
import { FilterModule } from './../../pipes/filter/filter.module';

const user1 = new User();
    const user2 = new User();
    const user3 = new User();
    const user4 = new User();

    // Creating user details for testing
    user1.name.first = 'something';
    user1.name.last = 'A';

    user2.name.first = 'something';
    user2.name.last = 'B';

    user3.name.first = 'something';
    user3.name.last = 'Aa';

    user4.name.first = 'something';
    user4.name.last = 'Ba';

    const users = [];
    // Pushing user details to a list of users
    users.push(user1)
    users.push(user2)
    users.push(user3)
    users.push(user4)
    const response = new Response(users);

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FilterModule,
        AlphaPaginationModule,
        ListModule,
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    service = TestBed.inject(UserService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have users', fakeAsync(() => {
    spyOn(service, 'getContacts').and.callFake(() => {
      return Promise.resolve(response.results)
    })
    component.getContacts();
    tick(100);
    expect(component.users).toEqual(response.results);
  }))

  it('should render no data available', fakeAsync(() => {
    component.users = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1.error-title').textContent).toContain('No data available')
  }))
});
