### **Angular Components**

Components are essential building blocks of Angular. They play a central role in the framework's architecture, enabling you to create reusable and independent parts of the user interface, each with its own logic, template, and style.

---

### **Creating a Component**

To create a new component, you can use the Angular CLI (Command Line Interface) with the following command:

```bash
ng generate component component-name
```

This will generate a file structure for the new component, including a **.ts** file (component logic), **.html** file (template), and **.css** file (styles), among others.

---

**Structure of a Component:**

An Angular component consists of three main parts:

- the @Component decorator
- the component class
- the associated template.

**Example:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-example", // Component selector used in the template.
  templateUrl: "./example.component.html", // Path to the component's template.
  styleUrls: ["./example.component.scss"], // Component's style files.
})
export class ExampleComponent {
  // Component logic here...
}
```

---

**Using a Component:**

You can use a component within other components or templates by referencing the selector defined in the @Component decorator.

**Example of Using a Component:**

```html
<app-example></app-example>
```

---

### **Communication Between Components**

Components can communicate with each other through **inputs**, **outputs**, and **models**. Historically, Angular used the `@Input()` and `@Output()` decorators, but the modern approach uses **Signal-based APIs**.

---

#### **Inputs:**

Allow a parent component to pass data to a child component. Using the `input()` function creates an `InputSignal`.

```typescript
import { Component, input } from "@angular/core";

@Component({
  selector: "app-child",
  template: "<p>{{ message() }}</p>", // Signals are read as functions
})
export class ChildComponent {
  // Optional input with a default value
  message = input("Default message");
  
  // Required input without a default value
  // id = input.required<string>();
}
```

Usage in Parent:
```html
<app-child [message]="parentMessage"></app-child>
```

---

#### **Outputs:**

Allow a child component to emit events to a parent component using the `output()` function.

**Child Component Configuration:**

```typescript
import { Component, output } from "@angular/core";

@Component({
  selector: "app-child",
  template: '<button (click)="onClickSend()">Send Message</button>',
})
export class ChildComponent {
  messageOutEvent = output<string>();

  onClickSend() {
    this.messageOutEvent.emit("Message from Child");
  }
}
```

**Parent Component Configuration - Template:**

```html
<app-child (messageOutEvent)="parentAction($event)"></app-child>
```

**Parent Component Configuration - Class:**

```typescript
...
parentAction(event: string): void {
  alert(event);
}
...
```

---

#### **Model Inputs (Two-Way Binding):**

The `model()` function creates a special input that supports two-way binding.

```typescript
import { Component, model } from "@angular/core";

@Component({
  selector: "app-custom-checkbox",
  template: '<input type="checkbox" [checked]="checked()" (change)="toggle()">',
})
export class CustomCheckboxComponent {
  checked = model(false);

  toggle() {
    this.checked.set(!this.checked());
  }
}
```

Usage in Parent (supports `[(checked)]` syntax):
```html
<app-custom-checkbox [(checked)]="isAdmin"></app-custom-checkbox>
```

---

### **Component Lifecycle**

The lifecycle of an Angular component consists of a series of events that occur from its creation to its destruction.

**Important Note on Signal Inputs:**
Signal-based inputs (`input()`, `model()`) are automatically reactive. Instead of using `ngOnChanges`, you should prefer using `computed()` or `effect()` to react to input changes.

---

#### **ngOnInit**

The `ngOnInit` event is triggered right after a component is initialized.

```typescript
import { Component, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>{{ message() }}</p>",
})
export class ExampleComponent implements OnInit {
  message = signal("");

  ngOnInit() {
    this.message.set("Hello, world!");
  }
}
```

---

#### **ngOnDestroy**

The `ngOnDestroy` event is triggered when a component is about to be destroyed. Used for cleanup.

```typescript
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>Component will be destroyed soon.</p>",
})
export class ExampleComponent implements OnDestroy {
  ngOnDestroy() {
    console.log("Component destroyed.");
  }
}
```

---

For more details on component communication, refer to the Angular documentation about [inputs](https://angular.dev/guide/components/inputs) and [outputs](https://angular.dev/guide/components/outputs).

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Refactor the app component of the project in previous task (08-forms-with-signals) to use dedicated insert, update, detail, remove, and list components.
- Ensure that all component communication (inputs and outputs) uses the new signal-based APIs (`input()`, `output()`, `model()`).

You can use tasks [Create hello, insert and list components](https://github.com/persapiens-classes/account-frontend/issues/8) and [Improve owner crud](https://github.com/persapiens-classes/account-frontend/issues/10) of Account Frontend Example Project.
