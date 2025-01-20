# Angular Data Binding

### What is Data Binding?

Data Binding is one of the core features of Angular. It allows you to connect model data (**component class**) with the template (**user interface**), enabling changes made to the data to be automatically reflected in the user interface and vice versa.

There are four main types of data binding in Angular: _Interpolation_; _Property Binding_; _Event Binding_; _Two-Way Binding_.

### Interpolation `{{ }}`
Interpolation is a simple form of data binding that allows you to display model values in the template, within text elements or attributes.

Example:
```html
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

### Property Binding `[ ]`

Property Binding allows you to assign model property values to HTML element attributes.

Example:

```html
<button [disabled]="isButtonDisabled">Click here</button>
```

### Event Binding `( )`

Event Binding allows you to bind events (such as clicks, mouseover, etc.) to methods in the component's model.

Example:
```html
<button (click)="handleClick()">Click me</button>
```

### Two-Way Binding `[( )]`

Two-Way Binding is a combination of *Property Binding* and *Event Binding*. It maintains bidirectional synchronization between the model and the template. Any changes in the model or the template will automatically reflect in the other.

Example:
```html
<input [(ngModel)]="name">
<p>Hello, {{ name }}!</p>
```

**How to enable Two-Way Binding?**

To use *Two-Way Binding*, you need to import the **FormsModule** in your main module (usually *app.module.ts*). Make sure the import is correctly included in the imports array of the NgModule:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Data Binding Notes**

- Data Binding is a powerful way to connect model data and the template, making the application more dynamic and responsive to changes in the data.
- It is important to be cautious to avoid infinite update loops when using Two-Way Binding, as changes in the model can trigger continuous updates in the template and vice versa.
- When using Two-Way Binding with the ngModel directive, remember to import FormsModule as explained earlier.

### Resume

Angular Data Binding is one of the main reasons why the framework is so efficient for developing reactive and interactive web applications. 

With Data Binding, you can create dynamic and responsive user interfaces, making it easier for users to interact with your application.

## Angular Class and Style Binding

In addition to the four main types of data binding mentioned earlier, Angular provides additional features to bind CSS classes and styles directly to the template.

These features are known as **Class Binding** and **Style Binding**.

### Class Binding

**Class Binding** allows you to dynamically add or remove CSS classes to HTML elements based on model property values. This is useful when you want to change the style of an element based on certain conditions or states of the application.

Example:

```html
<button [class.button-new]="isNew">Click here</button>
```

In this example, the CSS class **"button-new"** will be added to the button only when the **isNew** property in the component is true.

### Style Binding

Style Binding allows you to set CSS styles directly in the template based on model property values. This enables you to dynamically change style properties like color, size, margins, etc.

Example:

```html
<p [style.color]="textColor">This text has a dynamic color</p>
```

In this example, the **color** CSS style of the paragraph will be set based on the value of the **corTexto** property in the component.

**Applying Conditions with Class and Style Binding**

In addition to simply adding classes and styles, you can also apply complex conditions using **ternary expressions** or the **&&** (AND) operator to combine multiple conditions.

Example using ternary expression:

```html
<button [class.button-new]="isNew ? true : false">Click here</button>
```

Example using the && (AND) operator:

```html
<button [class.button-enabled]="isNew && !isFilled">Click here</button>
```

**Class and Style Binding in Two-Way Binding**

You can also combine Class Binding or Style Binding with Two-Way Binding to create highly dynamic and interactive user interfaces.

Example with Two-Way Binding and Class Binding:

```html
<input [(ngModel)]="classCSS" [class]="classCSS">
```

In this example, the value of the `classCSS` property in the model is bound to the class attribute of the input element, allowing the user to dynamically change the applied CSS class.

*Summary*

Class Binding and Style Binding are powerful Angular features for dynamically applying styles and classes in the template based on model properties. These functionalities make it easier and more efficient to develop interactive and reactive user interfaces, allowing you to create more dynamic applications with a better user experience.


## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create a angular project in Github.
- Include a devcontainer to work with typescript. You can use [Ria Example](https://github.com/persapiens-classes/ifrn-ria-example), but remember to change the image to use typescript.
- Create a insert, list, and remove crud operations of a model in template. Your model should have 3 attributes, including string, number, and boolean.
