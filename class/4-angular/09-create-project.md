# Create Angular project with PrimeNg

## Installing Angular CLI

Before we start creating an Angular project, let's install Angular CLI, a command-line interface that simplifies Angular application development.

1. Open your terminal or command prompt.

2. Run the following command to install Angular CLI globally on your system:

```bash
npm install -g @angular/cli
```

## Creating a New Angular Project

Now that we have Angular CLI installed, let's create a new Angular project.

Choose the directory where you want to create the project and navigate to it in the terminal.

Run the following command to create a new Angular project:

```bash
ng new project-name
```

The Angular CLI will ask some questions about the project configuration. You can choose to configure them according to your needs or simply press "Enter" to use the default settings.

Wait until the creation process is completed. The Angular CLI will create the basic project structure and install the necessary dependencies.

Navigate to the directory of the newly created project:

```bash
cd project-name
```

Now, you can start the development server to run the project:

```bash
ng serve
```

If you are running a devcontainer inside Windows, you should run the project with the following options:

```bash
ng serve --host 0.0.0.0 --port 4200 --poll 2000
```

Open your browser and visit http://localhost:4200/.  
You should see the Angular application running.

## Project Structure

```
project-name/
  |- e2e/
  |- node_modules/
  |- src/
  |  |- app/
  |  |  |- components/
  |  |  |- services/
  |  |  |- app.module.ts
  |  |  |- app.component.ts
  |  |  |- app.component.html
  |  |  |- app.component.scss
  |  |  |- app.component.spec.ts
  |  |- assets/
  |  |- environments/
  |  |- index.html
  |  |- main.ts
  |  |- styles.scss
  |- angular.json
  |- package.json
  |- tsconfig.json
  |- ...
```

## Project Structure

This is the basic structure of an Angular project. As you develop the application, other directories and files might be created to accommodate new components, services, modules, and so on. It's important to follow this organization to maintain a clean and well-structured Angular project, facilitating collaboration and maintenance.

**Explanation of the Structure**:

- **_e2e/_**: The _"e2e"_ directory contains end-to-end (e2e) tests written using the Protractor testing tool. These tests simulate user actions and verify if the application works correctly in an environment similar to production.

- **_node_modules/_**: This is the directory where all npm package dependencies are installed. It is created automatically when you run `npm install` to download the project's dependencies.

- **_src/_**: This is the main directory where the source code of the Angular application is located.

- **_src/app/_**: The _"app"_ directory contains all components, services, and files related to the application's logic.

- **_src/app/components/_**: In this directory, you can organize your components into subdirectories or create individual components. Each component consists of four files: _.component.ts_, _.component.html_, _.component.css_, and _.component.spec.ts_.

- **_src/app/services/_**: In this directory, you can create and organize services used to share data and logic between components.

- **_src/app/app.module.ts_**: The _"app.module.ts"_ file is the root module of the application. It imports and declares the components, services, and other modules used by the application.

- **_src/app/app.component.ts_**: The _"app.component.ts"_ file is the root component of the application, which controls the main template _"app.component.html"_ and the stylesheet _"app.component.css"_.

- **_src/app/app.component.html_**: The _"app.component.html"_ file is the main template of the application, defining the DOM structure that will be rendered.

- **_src/app/app.component.css_**: The _"app.component.css"_ file contains styles specific to the root component.

- **_src/app/app.component.spec.ts_**: The _"app.component.spec.ts"_ file contains unit tests for the root component.

- **_src/assets/_**: The _"assets"_ directory contains static resources for the application, such as images, JSON files, etc.

- **_src/environments/_**: Here, you will find environment-specific configurations, such as environment variables for different development, testing, and production environments.

- **_src/index.html_**: The _"index.html"_ file is the main HTML page of the application, where the Angular app is bootstrapped.

- **_src/main.ts_**: The _"main.ts"_ file is the entry point of the Angular application. It calls the _platformBrowserDynamic().bootstrapModule()_ function to initialize the root module _"AppModule"_.

- **_src/styles.css_**: The _"styles.css"_ file is the global stylesheet for the application, defining styles that affect all components.

- **_angular.json_**: The _"angular.json"_ file contains the configuration for the Angular project, such as global styles, scripts, build configurations, and other Angular CLI-specific settings.

- **_package.json_**: The _"package.json"_ file is used by npm to manage the project's dependencies and store information about the project, such as its name, version, scripts, etc.

- **_tsconfig.json_**: The _"tsconfig.json"_ file is the TypeScript configuration file, where you can define the TypeScript compiler settings for the project.

