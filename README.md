# AddressBook

## Summary
Address book is a small application utilizing the random user API to retrieve Random users and display there details.

## Approach
For this project, the following assumptions are made:
### Home Component

- No pagination, use only a fixed size of results from the random user API
- Once looking at the list of contacts, seperate the users into alphabetical categories, i.e display all users with last name A under a heading of A and so on...
- To navigate to each category easily, creating a list of buttons  from A to Z that when clicked will scroll to the top of the category div, i.e Z is Clicked the div with id #Z will scroll into view.
- This design makes it easier for desktop and mobile views, no big media queries needed.

### Details Component
- To retreive details, the Random user API does not have a good way of retrieving a specific user. Therefore leveraging the exisitng service to get the contacts and find the user by username in the list of Users, and display the user in the Details component template.
- Add logic to ensure that if a user is not found, then a redirect 404 should occur.

## Features implemented
- HeaderComponent: Simple header with a title inside, and depending on the page, a back button will be available to navigate to the previous page.

- HomeComponent: this component where the contact list is displayed
  - AlphaPaginationComponent: this component displays a list of characters from A to Z, used in the **HomeComponent** to navigate navigate to the divs marked with fragment
  - ListComponent: Stateless component that simply holds the overall styling for the list
  - ListItemComponet: Component which can either be a link or plain list item

- DetailsComponent: this component displays the details of a contact

## Future features?
- Scroll type pagination (by alphabetical order) <-  Not available in Random User API
- Adding a search feature to lookup contacts

## Room for improvements
- For Back button, if just navigated to page directly from say google, then default should go back to the project's home page.
- Adding pagination
- Turning the promised by service method to retrieve users into a observable method. If pagination should be implemented that scrolling through the list and loading more users would handle the requests a lot more easier
- Changing this into a true single page application, where users appear on the left hand side and once clicked the details will appear. considering the API, it seems that would be a more better approach.


# Install project
- In your terminal run the following command `git clone https://github.com/varu4300/address-book.git`
- In your terminal navigate to the project by running the command `cd /path/to/project`
- In the root of the project run the command `npm i` to install node module dependencies

# Running the development server
- In your terminal in the root of the project run `ng serve`
* Note this will only run if you've followed the **Install project** instructions

# Running unit tests
- In your terminal in the root of the project run `ng test`
- For viewing code coverage run `ng test --code-coverage` in the root of the project

# Running in production
- In your terminal in the root of the project run `ng build --prod`
- In your terminal change directories to the dist folder in the root of your project, `cd /path/to/project/dist/address-book`
- In your terminal in the root of the address-book folder run the command `live-server`
- If you do not have `live-server`, I recommend installing it, [live-server](https://www.npmjs.com/package/live-server)
- Project should start

