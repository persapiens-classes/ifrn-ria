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

Components can communicate with each other through inputs and outputs.

---

#### **Inputs:**

Allow a parent component to pass data to a child component.

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-child",
  template: "<p>{{ message }}</p>",
})
export class ChildComponent {
  @Input() message: string;
}
```

```html
<app-child [message]="parentMessage"></app-child>
```

---

#### **Outputs:**

Allow a child component to emit events to a parent component.

**Child Component Configuration:**

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: '<button (click)="onClickSend()">Send Message</button>',
})
export class ChildComponent {
  @Output() messageOutEvent = new EventEmitter<string>();

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

For more details on component communication, refer to the Angular documentation at [https://angular.io/guide/inputs-outputs](https://angular.io/guide/inputs-outputs).

---

### **Component Lifecycle**

The lifecycle of an Angular component consists of a series of events that occur from its creation to its destruction. Each event provides an opportunity to perform specific actions at key moments during the component's lifespan.

Here are the main lifecycle events of a component, along with examples demonstrating how to use them:

---

#### **ngOnInit**

The `ngOnInit` event is triggered right after a component is initialized. It's a good place to perform initializations, such as fetching data from a service or setting up variables.

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>{{ message }}</p>",
})
export class ExampleComponent implements OnInit {
  message: string;

  ngOnInit() {
    this.message = "Hello, world!";
  }
}
```

---

#### **ngOnChanges**

The `ngOnChanges` event is triggered whenever an input value (`@Input`) changes. It provides an object containing the detected changes.

```typescript
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  template: "<p>{{ message }}</p>",
})
export class ChildComponent implements OnChanges {
  @Input() message: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.message) {
      console.log("Message value changed to:", changes.message.currentValue);
    }
  }
}
```

---

#### **ngDoCheck**

The `ngDoCheck` event is triggered whenever change detection is executed. It can be used to perform manual change checks.

```typescript
import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>{{ counter }}</p>",
})
export class ExampleComponent implements DoCheck {
  counter: number = 0;

  ngDoCheck() {
    console.log("ngDoCheck executed.");
    // Logic for manual change detection here...
  }
}
```

---

#### **ngOnDestroy**

The `ngOnDestroy` event is triggered when a component is about to be destroyed. It is used to perform cleanup actions, such as canceling subscriptions or disconnecting from services.

```typescript
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-example",
  template: "<p>Component will be destroyed soon.</p>",
})
export class ExampleComponent implements OnDestroy {
  ngOnDestroy() {
    console.log("Component destroyed.");
    // Cleanup actions here...
  }
}
```

---

**Note:**

Remember that lifecycle events are optional, and you don't need to implement all of them in every component. Choose the events that are relevant to what you want to achieve and use them as needed.

In addition to the main Angular lifecycle methods such as `ngOnInit`, `ngOnChanges`, `ngDoCheck`, and `ngOnDestroy`, there are other methods like **ngAfterContentInit**, **ngAfterContentChecked**, **ngAfterViewInit**, and **ngAfterViewChecked** that provide opportunities to interact with projected content and the component's view. Understanding and utilizing these methods appropriately will enable you to control and optimize your component's logic across different lifecycle phases.

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Refactor that app component of the project in previous task (12-ui-components) to use dedicated insert, update, detail, remove, and list components.

You can use [Ria Angular Example](https://github.com/persapiens-classes/ifrn-angular-ria-angular-example).
