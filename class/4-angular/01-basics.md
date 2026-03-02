# Fundamentals of the Angular Framework

## What is Angular?

Angular is a framework for building client applications using HTML, CSS, and JavaScript/TypeScript. It employs the SPA (**_Single Page Application_**) approach, enabling the application to load once and dynamically update content without reloading the page.

## Why use Angular?

- **Productivity**: Angular provides tools and frameworks that facilitate agile and efficient development.
- **Solid Architecture**: Its modular, component-oriented design simplifies code organization and functionality reuse.
- **Performance**: Angular optimizes application performance, ensuring a fast and fluid user experience.
- **Ecosystem and Active Community**: The Angular platform has a large developer community and numerous libraries and resources available.

## Key Features and Benefits

- **TypeScript**: Angular is written in TypeScript, which adds static typing to JavaScript, making the code more robust and readable.
- **Data Binding**: The powerful data binding mechanism synchronizes data between components and templates easily.
- **Dependency Injection**: Angular’s dependency injection system efficiently manages dependencies between components.
- **Directives**: Directives extend HTML syntax, enabling custom behaviors for page elements.
- **Routing**: Angular's router facilitates multi-page applications within an SPA, managing transitions between components.
- **Testability**: Angular encourages testing practices, making applications more reliable and maintainable.

## Angular Architecture

Angular's architecture is based on fundamental concepts such as **_components_**, **_modules_**, **_services_**, and **_directives_**. Combine these elements to create a solid and modular structure for developing efficient and scalable web applications.

1. **Components**:

Components are the building blocks of Angular. They control specific parts of the user interface and can be reused throughout the application. Each component has an associated template defining the DOM structure to be rendered.

Angular component example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example', // Component selector used in templates
  templateUrl: './example.component.html', // Path to the component's template
  styleUrls: ['./example.component.scss'], // Associated style files
})
export class ExampleComponent {
  // Component logic here...
}
```


2. **Templates**:  
Templates are a vital part of Angular's architecture. They define the DOM structure to be rendered for a specific component. Templates are written in HTML and can include directives and bindings to display data and interact with the component's logic.

Example of an Angular template:

```html
<h2>Item List</h2>
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```


3. **Directives**:
Directives are instructions for the DOM. They can be used to modify the appearance, behavior, or structure of HTML. There are built-in directives such as **if** and **for**, and you can also create your own custom directives.

Example of using directive @if in templates:

```typescript
@if (condicao) {
  <!-- Conteúdo a ser exibido quando a condição for verdadeira -->
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```


4. **Services**:
Services are classes that contain reusable logic and can be injected into components and other services. They are used to share data, make HTTP calls, perform asynchronous operations, and much more.

Example of an Angular service:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Configuration to make the service available throughout the application.
})
export class ExampleService {
  items: string[] = [];

  adicionarDado(item: string) {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}
```


5. **Modules**:
Modules are used to organize code into functional and independent pieces. Every Angular application has at least one root module (usually called AppModule) that is responsible for initializing the application. Additionally, you can create modules to organize specific functionalities.

Example of an Angular module:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [ExampleComponent], // Components declared in this module.
  imports: [CommonModule], // Modules imported for use in this module.
  exports: [ExampleComponent], // Components, directives, and pipes available to other modules.
})
export class ExampleModule { }

```


