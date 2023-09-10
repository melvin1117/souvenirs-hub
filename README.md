# SouvenirsHub

A responsive blogging site developed using Angular 9

It uses angular-in-memory-web-api to simulate API calls.

You can visit [here](https://melvin1117.github.io/souvenirs-hub/) to view the application.

## Features
* Dashboard - Lists the active blog posts
* Create Post - (Preview while creating)
* Update Post - (Preview while updating)
* Move Post to trash - Soft deletion
* Destroy Post- Delete the post permanently
* Comments Section to each post
* Update Comment
* Move Comment to trash - Soft deletion
* Destroy - Delete the comment permanently 
* Trash - List out the soft deleted post and comments (Separate tab for post and comment)
* Restore Post/Comment from Trash
* Similar Post Section in Post view (List 3 similar posts, randomly selects from available posts)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Documentation
A compodoc documentation available in /documentation folder
Open index.html file in browser to view

Run `generate-doc` to generate the document

### Note: 
There is some compatibility issue of compodoc with Angular 9. So if generated using above command, Routes graph won't be generated. Refer the committed documentation for routes graph.
