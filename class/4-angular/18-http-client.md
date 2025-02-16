## HttpClient

**What is HttpClient?**

- The *HttpClient* is an Angular module that provides an easy way to make HTTP requests in Angular applications.
- It is a class that is part of the *@angular/common/http* module.

**Why is it important?**

- Many web applications need to interact with servers to fetch or send data. The *HttpClient* makes this possible efficiently and in an organized manner.
- It handles low-level details, such as creating and managing HTTP requests and responses.

**How does it fit into Web Development?**

- The *HttpClient* is used to communicate with RESTful APIs, web services, and other HTTP resources.
- It is an essential part of front-end development when you need to fetch data from or update data on a server.

**Basic HttpClient Configuration**

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }
```

- To use HttpClient, first import it from the **@angular/common/http** module.
- Then, inject it as a dependency in the constructor of a component or service.
- Now you can use *this.http* to make HTTP requests in your application.

See [Angular HttpClient Official Reference.](https://angular.dev/guide/http)


## Signals

A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.

You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

See also [Angular Signals Official Reference.](https://angular.dev/guide/signals)

---

### Fetching Data via REST API (HTTP GET)

- Fetching data from a server
- Using the **.get()** method

```typescript
  private _owners = signal<Owner[]>([]); // Signal to store owners

  public async loadOwners() {
    try {
      const owners = await lastValueFrom(this.http.get<Owner[]>(this.apiUrl))
      if (owners) {
        this._owners.set(owners)
      }
    } catch (error) {
      console.error("Error loading Owners:", error)
    }
  }
```

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create Auth service to sign in some backend system, keeping jwt token in localStorage. 
- Create Login component to sign in using Auth service. Refactor routers to do login as initial page.
- Using authentication token, protect routers to other componentes with [Angular Guard](https://angular.dev/api/router/CanActivate).
- Create model service using httpClient to do CRUD options in backend system, adding jwt token with [Angular Http Interceptors](https://angular.dev/guide/http/interceptors).

You can use tasks [Create Auth Service to sign in Account Backend](https://github.com/persapiens-classes/account-frontend/issues/18), [Create Login Component using sign in of AuthService](https://github.com/persapiens-classes/account-frontend/issues/20), [Protect routers to other components with Angular Guard (Authenticated User) ](https://github.com/persapiens-classes/account-frontend/issues/22), [Create owner service using httpclient to do crud options in account backend system](https://github.com/persapiens-classes/account-frontend/issues/25) of the Account Frontend.
