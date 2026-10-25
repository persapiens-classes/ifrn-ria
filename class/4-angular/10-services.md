### **Angular Services**

Services play a fundamental role in Angular's architecture, enabling the sharing of logic, data, and functionality between components in an efficient and organized manner. They are classes that can be injected into components, modules, and other services, promoting code reuse and separation of concerns.

---

### **Creating a Service**

To create a new service, you can use the Angular CLI with the following command:

```bash
ng generate service service-name
```

**Example of a Service:**

```typescript
import { Service } from '@angular/core';

@Service()
export class MyService {
  data: string[] = [];

  addData(data: string) {
    this.data.push(data);
  }

  getData(): string[] {
    return this.data;
  }
}
```

---

### **Injecting a Service**

Services can be injected into components, modules, or other services using Angular's dependency injection mechanism.

**Example of Service Injection in a Component:**

```typescript
import { Component, inject } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-example',
  template: '<button (click)="add()">Add Data</button>',
})
export class ExampleComponent {
  myService: inject(MyService);

  add() {
    this.myService.addData('New data');
  }
}
```

---

### **Summary**

Services play a crucial role in Angular application development, enabling code reuse, separation of concerns, and efficient sharing of data and functionality between components. By creating and using services appropriately, you can develop a more modular, flexible, and scalable application architecture.

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create services for your models and refactor the crud component of the project in the previous task (13 components) to use it.

You can use task [Create owner service](https://github.com/persapiens-classes/account-frontend/issues/12) of the Account Frontend Example Project.
