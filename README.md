# Contact Managment Application

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

### Read the instructions from https://projects.breatheco.de/d/contact-list#readme

### Requirements:
- Make sure you are using node version 8

### Install the packages:
```
$ npm install
```
#### if you see on the left the 'node_modules' folder, you don't need to run 'npm install'

## Start coding!

Start the webpack server with live reload:
- `$ npm run start` for windows, mac, linux or Gitpod.
- `$ npm run c9` for Cloud 9 Users.

# The project is divided in:
## Two different views:

* Contact: Contains the list of contacts.
* AddContact: It's just a form that you can use to create or update contatcs.

## There is one additional component:

ContactCard: Ideal component to display just one contact.

# Expected functionalities

* You have to add the code needed to make your application create, edit, and delete contacts from the list.
* (Optional but is a plus) Ask the user for confirmation before deleting, use the Modal component for that.


### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/component` or styles folder as you need them and import them into your current files as needed.

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)

The `Context.Provider` is already set, you can use the `Context.Consumer` to get the `store` and `actions` from the Context. Check `/views/demo.jsx` to see a demo.

## Publish your website!

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
