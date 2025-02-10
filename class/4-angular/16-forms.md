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

### Form Validation

Form validation ensures that the user input is correct and valid. Angular provides ways to validate forms in both Template-Driven and Reactive (Model-Driven) modes.

### Validation in Template-Driven Forms

**Required Field Validation**

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name" #name="ngModel" ngModel required>
<div *ngIf="name.invalid && (name.dirty || name.touched)" class="error">
  Name is required.
</div>
```

Explanation:

- We use the *required* directive to define that the field is mandatory.
- We use the local variable *#name* to access the field's state in the template.
- The expression **ngIf="name.invalid && (name.dirty || name.touched)"** checks if the field is invalid and has been touched or modified. If these conditions are met, the *div* element with the error message will be displayed.

**Email Format Validation**

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" #email="ngModel" ngModel required email>
<div *ngIf="email.invalid && (email.dirty || email.touched)" class="error">
  Enter a valid email.
</div>
```

Explanation:

- Besides the *required* directive, we use the *email* directive to validate the email format.
- Similar to the previous example, we check if the field is invalid and has been touched or modified to display the error message.

**Min and Max Length Validation**

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" #password="ngModel" ngModel minlength="6" maxlength="12" required>
<div *ngIf="password.invalid && (password.dirty || password.touched)" class="error">
  Password must be between 6 and 12 characters long.
</div>
```

Explanation:

- We add *#password="ngModel"* to declare the local variable *password* and associate it with ngModel.
- The *minlength* and *maxlength* directives are used to define the password length limits.
- If the password is shorter than 6 or longer than 12 characters, the validation is triggered, and the error message is displayed.

**Field Comparison Validation (Password Confirmation)**

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" #password="ngModel" ngModel required>
<label for="confirmPassword">Confirm Password:</label>
<input type="password" id="confirmPassword" name="confirmPassword" #confirmPassword="ngModel" ngModel required [equalTo]="password">
<div *ngIf="confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)" class="error">
  Passwords do not match.
</div>
```

Explanation:

- We add *#confirmPassword="ngModel"* to declare the local variable *confirmPassword* and associate it with ngModel.
- In the password confirmation field, we use the directive *[equalTo]="password"* to link the validation to the original password field.
- A custom validation directive called *[equalTo]* is implemented to compare the field value with the original password value.

---

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

### Validation in Reactive Forms (Model-Driven)

**Required Field Validation (Reactive)**

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="submit()">
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name">

      <div *ngIf="myForm.get('name').hasError('required') && myForm.get('name').touched" class="error">
        Name is required.
      </div>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">

      <div *ngIf="myForm.get('email').hasError('required') && myForm.get('email').touched" class="error">
        Enter a valid email.
      </div>

      <button type="submit">Submit</button>
    </form>
  `
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submit() {
    if (this.myForm.valid) {
      // Logic to process the data
    }
  }
}
```

Explanation:

- We use *FormBuilder* to create a form group (*FormGroup*) named *myForm*. This group contains the form fields.
- For the *"name"* field, we define a control with an initial empty value `''` and apply the required field validation (*Validators.required*).
- Similarly, we do the same for the *"email"* field, applying the required field validation.

**Email Format Validation (Reactive)**

```typescript
this.myForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]]
});
```

Explanation:

- We create an *"email"* field within the *myForm* group.
- An array of validators is used for this field. *Validators.required* ensures the field is filled, and *Validators.email* checks if the entered value is in a valid email format.

**Min and Max Length Validation (Reactive)**

```typescript
this.myForm = this.formBuilder.group({
  password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
});
```

Explanation:

- We create a *"password"* field within the *myForm* group.
- A series of validators is used for this field. *Validators.required* ensures the field is filled, *Validators.minLength(6)* checks if the password has at least 6 characters, and *Validators.maxLength(12)* checks if the password has at most 12 characters.

**Field Comparison Validation (Password Confirmation) (Reactive)**

```typescript
this.myForm = this.formBuilder.group({
  password: ['', Validators.required],
  confirmPassword: ['', [Validators.required, this.equalToValidator('password')]]
});

equalToValidator(otherControlName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const otherControl = control.root.get(otherControlName);

    if (otherControl && control.value !== otherControl.value) {
      return { equalTo: true };
    }

    return null;
  };
}
```

Explanation:

- We create two fields, *"password"* and *"confirmPassword"*, within the *myForm* group.
- For the *"confirmPassword"* field, we apply a custom validation *this.equalToValidator('password')*. This function compares the field value with the *"password"* field value.
- The *equalToValidator* function returns a custom validator that compares the two field values. If they are different, the validation returns *{ equalTo: true }*, indicating the passwords do not match.

**Custom Validation (Reactive)**

```typescript
this.myForm = this.formBuilder.group({
  username: ['', [Validators.required, this.customValidation]]
});

customValidation(control: AbstractControl): { [key: string]: any } | null {
  if (control.value === 'admin') {
    return { customValidation: true };
  }

  return null;
}
```

Explanation:

- We create a *"username"* field within the *myForm* group.
- A custom validation *this.customValidation* is applied. This function checks if the entered value equals "*admin*".
- If the value is "*admin*", the validation returns *{ customValidation: true }*, indicating a custom error.


## :orange_book: Angular documentation


[See official Angular documentation with detailed information about Form Validation](https://angular.dev/guide/forms).


## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create validation with Reactive Forms in inserting, and updating components of your model project in the previous task (15 services).

You can use task [Insert component with form validation](https://github.com/persapiens-classes/ifrn-ria-angular-example/issues/16) of the Angular Example Project.

