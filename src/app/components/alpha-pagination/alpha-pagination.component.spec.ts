import { FilterModule } from './../../pipes/filter/filter.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/classes/user';

import { AlphaPaginationComponent } from './alpha-pagination.component';

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

    const users: User[] = [];
    // Pushing user details to a list of users
    users.push(user1)
    users.push(user2)
    users.push(user3)
    users.push(user4)

describe('AlphaPaginationComponent', () => {
  let component: AlphaPaginationComponent;
  let fixture: ComponentFixture<AlphaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FilterModule ],
      declarations: [ AlphaPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input of Users', () => {
    component.users = users;
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.char-link.active').textContent).toContain('A')
  })

  it('should have disabled link of C', () => {
    component.users = users;
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.char-link.disabled').textContent).toContain('C')
  });

});
