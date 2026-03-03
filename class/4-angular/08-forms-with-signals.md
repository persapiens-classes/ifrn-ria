## Forms in Angular

Handling user input with forms is central to most applications. Angular provides **Signal Forms** to manage form state with signals and keep the UI synchronized with the model.

> IMPORTANT: Signal Forms are experimental. The API may change in future releases.

### Forms with Signals (Signal Forms)

Signal Forms start with a model signal, then you create a field tree using `form()`, and bind inputs with the `[formField]` directive.

**Example: Login form with Signal Forms**

```typescript
import { Component, signal } from "@angular/core";
import {
  email,
  form,
  FormField,
  minLength,
  required,
} from "@angular/forms/signals";

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  imports: [FormField],
  template: `
    <form (submit)="onSubmit($event)">
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" [formField]="loginForm.email" />

        @if (loginForm.email().touched() && loginForm.email().invalid()) {
          <ul class="error-list">
            @for (error of loginForm.email().errors(); track error) {
              <li>{{ error.message }}</li>
            }
          </ul>
        }
      </div>

      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" [formField]="loginForm.password" />

        @if (loginForm.password().touched() && loginForm.password().invalid()) {
          <ul class="error-list">
            @for (error of loginForm.password().errors(); track error) {
              <li>{{ error.message }}</li>
            }
          </ul>
        }
      </div>

      <button type="submit" [disabled]="!loginForm.valid()">Log In</button>
    </form>
  `,
})
export class LoginComponent {
  loginModel = signal<LoginData>({
    email: "",
    password: "",
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: "Email is required" });
    email(schemaPath.email, { message: "Enter a valid email address" });

    required(schemaPath.password, { message: "Password is required" });
    minLength(schemaPath.password, 6, {
      message: "Password must be at least 6 characters",
    });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.loginForm.valid()) {
      return;
    }

    const credentials = this.loginModel();
    console.log("Logging in with:", credentials);
  }
}
```

**Read and update field values**

```typescript
const currentEmail = loginForm.email().value();
loginForm.email().value.set("alice@wonderland.com");
```

**Field state access**

Calling a field (for example, `loginForm.email()`) returns a `FieldState` with signals like `value()`, `valid()`, `touched()`, and `errors()`.

## :orange_book: Angular documentation

[See official Angular documentation with detailed information about Form Validation](https://angular.dev/guide/forms).

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create validation with signals in inserting and updating components of your model project in the previous task (15 services).

You can use task [Insert component with form validation](https://github.com/persapiens-classes/account-frontend/issues/16) of the Account Frontend Example Project.
