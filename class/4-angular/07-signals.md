## Signals in Angular

Signals are a reactive system that tracks how and where your state is used throughout an application, allowing Angular to optimize rendering updates. A signal is a wrapper around a value that can notify interested consumers when that value changes.

### Writable Signals

Writable signals provide an API for updating their values directly. You create them using the `signal()` function.

**Example: Basic Counter with Writable Signals**

```typescript
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>Current count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  // Create a writable signal with an initial value of 0
  count = signal(0);

  increment() {
    // Update the signal value based on its previous value
    this.count.update((value) => value + 1);
  }

  reset() {
    // Set the signal to a specific value
    this.count.set(0);
  }
}
```

**Reading and updating signals**

- **Read**: Call the signal as a function: `count()`.
- **Set**: Use `.set(newValue)` to replace the value.
- **Update**: Use `.update(fn)` to compute a new value from the previous one.

### Computed Signals

Computed signals are read-only signals that derive their value from other signals. They are defined using the `computed()` function.

**Example: Derived state with Computed Signals**

```typescript
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  template: `
    <p>Items: {{ quantity() }}</p>
    <p>Total Price: {{ totalPrice() | currency }}</p>
  `,
})
export class ShoppingCartComponent {
  quantity = signal(5);
  pricePerItem = signal(20);

  // totalPrice is automatically updated whenever quantity or pricePerItem changes
  totalPrice = computed(() => this.quantity() * this.pricePerItem());
}
```

### Effects

An effect is an operation that runs whenever one or more signal values change. Effects are useful for side effects like logging, manual DOM manipulation, or calling external APIs.

```typescript
import { Component, signal, effect } from "@angular/core";

@Component({ ... })
export class MyComponent {
  count = signal(0);

  constructor() {
    // This effect runs whenever count() changes
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
}
```

## :orange_book: Angular documentation

[See official Angular documentation about Signals](https://angular.dev/guide/signals).

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Refactor a component in your project to use Signals for state management instead of plain properties.
- Use `computed()` to derive at least one value.
- (Optional) Use `effect()` to log changes or interact with a non-reactive API.

You can use the [Signals example](https://angular.dev/guide/signals#what-are-signals) from the official documentation as a reference.
