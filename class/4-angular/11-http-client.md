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


---

## HttpClient and RxJS

RxJS is a JavaScript library that has become one of the fundamental pillars in modern web application development, especially in reactive and asynchronous environments.

Here are some key concepts related to RxJS:

1. **Observables**: Observables are at the core of RxJS. They represent a data source that can emit values over time. These values can be DOM events, API responses, user clicks, or anything else you want to observe.

2. **Operators**: Operators are functions that allow you to transform, filter, combine, and manipulate the data that flows through an Observable. There are many available operators, such as **map**, **filter**, **merge**, **concat**, and many others.

3. **Subscriptions**: A Subscription is an object that represents the execution of an Observable and allows you to unsubscribe from it when it's no longer needed. This is important to prevent memory leaks.

4. **Observers**: Observers are the consumers of Observables. They define what to do when an Observable emits values, usually in the form of functions that handle those values.

5. **Asynchronous Data Flow**: RxJS is especially useful when working with asynchronous operations, such as API requests, DOM events, or anything not directly controlled by your code.

6. **Reactive Programming**: Reactive programming is a programming paradigm that focuses on the propagation of state changes. With RxJS, you can create reactive data pipelines that automatically respond to data changes.

7. **Cross-Platform Compatibility**: RxJS is a JavaScript library, but its ideas and concepts can be applied in many programming languages. There are Rx implementations in other languages, such as RxJava for Java and RxSwift for Swift.

HttpClient and RxJS have a close relationship in the context of Angular application development.
See [Angular Making HTTP requests.](https://angular.dev/guide/http/making-requests)

- **Observables in HttpClient**: HttpClient uses **RxJS** Observables to handle HTTP requests and responses in an asynchronous and reactive way. When you make an HTTP request using HttpClient, it returns an Observable that you can subscribe to in order to receive the results.

- **Handling Asynchronous Responses**: HTTP requests are asynchronous operations, since you're waiting for a response from the server. **RxJS** is a library that efficiently handles asynchronous data streams and events. Therefore, HttpClient uses RxJS Observables to handle these responses reactively.

- **RxJS Operators with HttpClient**: You can use RxJS operators alongside HttpClient to manipulate and transform response data. For example, you can use the **map** operator to transform the response data before processing it, or use the **catchError** operator to handle request errors.

### Getting Data via REST API (HTTP GET)

- Retrieving data from a server  
- Using the **.get()** method

```typescript
this.http.get('https://api.example.com/data').subscribe(data => {
  console.log(data);
});
```

### Updating Data via REST API (HTTP PUT)

- Updating data on the server  
- Using the **.put()** method

```typescript
const newData = { name: 'New Name', age: 25 };
this.http.put('https://api.example.com/data/1', newData).subscribe(response => {
  console.log(response);
});
```

### Deleting Data via REST API (HTTP DELETE)

- Deleting data on the server  
- Using the **.delete()** method

```typescript
this.http.delete('https://api.example.com/data/1').subscribe(response => {
  console.log(response);
});
```

### Inserting New Data via REST API (HTTP POST)

- Sending new data to the server  
- Using the **.post()** method

```typescript
const newData = { name: 'New Name', age: 25 };
this.http.post('https://api.example.com/data', newData).subscribe(response => {
  console.log(response);
});
```

## Handling Errors

- Error handling with *catchError*  
- Example of error handling

```typescript
this.http.get('https://api.example.com/data').pipe(
  catchError(error => {
    console.error('Error:', error);
    return throwError(() => new Error('Something went wrong.'));
  })
).subscribe(data => {
  console.log(data);
});
```

---

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create Auth service to sign in some backend system, keeping jwt token in localStorage. 
- Create Login component to sign in using Auth service. Refactor routers to do login as initial page.
- Using authentication token, protect routers to other componentes with [Angular Guard](https://angular.dev/api/router/CanActivate).
- Create model service using httpClient to do CRUD options in backend system, adding jwt token with [Angular Http Interceptors](https://angular.dev/guide/http/interceptors).

You can use tasks [Create Auth Service to sign in Account Backend](https://github.com/persapiens-classes/account-frontend/issues/18), [Create Login Component using sign in of AuthService](https://github.com/persapiens-classes/account-frontend/issues/20), [Protect routers to other components with Angular Guard (Authenticated User) ](https://github.com/persapiens-classes/account-frontend/issues/22), [Create owner service using httpclient to do crud options in account backend system](https://github.com/persapiens-classes/account-frontend/issues/25) of the Account Frontend.
