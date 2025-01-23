## Forms in Angular

Handling user input with forms is the foundation of many common applications. Forms are used in applications to enable users to log in, update profiles, enter sensitive information, and perform many other data entry tasks.  

Angular provides a powerful forms module that simplifies creating, validating, and managing complex and dynamic forms.

There are two main types of forms in Angular: **Template-Driven and Reactive (Model-Driven).**

### Template-Driven Forms

Template-Driven forms are simpler and based on HTML templates. Validation is primarily handled in HTML, and most of the logic is automatically managed by Angular.

Example:

```html
<form #myForm="ngForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" ngModel required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" ngModel required email>

  <button (click)="onSubmit(myForm)">Submit</button>
</form>
```

**Code Details:**

- **form**: The root form element. The attribute **#myForm="ngForm"** binds the form to a variable named `myForm`, which is used to access the form's state and controls. When the form is submitted, the method **onSubmit('myForm')** will be triggered in the component class.

- **label**: Label identifying the input field for the user.

- **input**: Input element for the user to enter data. The `type` attribute defines the type of input (e.g., text or email). The *`id`* attribute must match the *`for`* attribute of the label to link them. The *`name`* attribute identifies the fields in the form.

- **ngModel**: Angular directive that creates a two-way binding between the input fields and the data model. It allows direct access to and updates of the field values in the component.

- **required**: Directive specifying that the field is required.

- **email**: Directive that validates whether the field contains a valid email address.

- **button**: Button to submit the form. When clicked, the form will be submitted.

**Validation and Submission**

Validation automatically occurs based on the directives applied to the input fields. If a required field is empty or the email format is incorrect, Angular will mark the field as invalid.

```text
Note: To work with template-driven forms, you must import the `FormsModule` in the `app.module.ts` file.
```

### Reactive Forms (Model-Driven)

Reactive forms offer greater control and flexibility. They are programmatically built, and validation is defined in the TypeScript code.

Example:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="submit()">
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name">

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">

      <button type="submit">Submit</button>
    </form>
  `
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.myForm.valid) {
      // Logic to process the data
    }
  }
}
```

**Code Details:**

- **import { FormBuilder, FormGroup, Validators } from '@angular/forms';** - Importing necessary modules to build and validate the reactive form.

- **constructor(private formBuilder: FormBuilder) { ... }** - The `FormBuilder` service is injected in the component's constructor to simplify the creation of the reactive form.

- **this.myForm = this.formBuilder.group({ ... })** - Using `FormBuilder` to create a `FormGroup` named `myForm`, where fields and their validations are defined.

- **name: ['', Validators.required]** - Defining the *"name"* field with an initial empty value (`''`) and applying a required field validation.

- **email: ['', [Validators.required, Validators.email]]** - Defining the *"email"* field with an initial empty value and applying two validations: required field and valid email format.

- **(ngSubmit)="submit()"** - Binding the form's *ngSubmit* event to the `submit()` method, which is called when the "Submit" button is pressed.

- **submit() { ... }** - This method is called when the form is submitted. We check if the form is valid using `this.myForm.valid`. If valid, logic to process form data can be added.

```text
Note: To work with reactive forms, you must import the `ReactiveFormsModule` in the `app.module.ts` file.
```

### Form Validation

Form validation ensures that the user input is correct and valid. Angular provides ways to validate forms in both Template-Driven and Reactive (Model-Driven) modes.
