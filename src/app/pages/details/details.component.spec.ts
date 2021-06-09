import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { User } from '../../classes/user';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';

const user1 = new User();
const user2 = new User();
const id = 'user';
// Creating user details for testing
user1.name.first = 'something';
user1.name.last = 'A';
user1.login.username = 'user1'
user2.name.first = 'something';
user2.name.last = 'B';
user2.login.username = 'user2'
const users: User[] = [];
users.push(user1);
users.push(user2);

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ RouterTestingModule , HttpClientTestingModule]
    })
    .compileComponents();
    service = TestBed.inject(UserService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getUsershould should return user', fakeAsync(() => {
    component.getUser(users, 'user1');
    expect(component.user).not.toBeUndefined();
  }))

  it('#getUsershould should return null', fakeAsync(() => {
    component.getUser(users, 'user');
    expect(component.user).toBe(null);
  }))

});
