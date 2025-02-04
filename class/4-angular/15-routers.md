### **Angular Router**

Routing is a key part of many modern web applications, enabling users to navigate between different sections of the app without reloading the page. Angular offers a robust routing module that simplifies navigation between components and views.

---

### **Creating the Routing Module**

You need to create the routing module, `_AppRoutingModule_`, and define the application's routes in it. If this module was not created during project initialization, execute the following command:

```bash
ng generate module app-routing --flat --module=app
```

---

### **Setting Up Routing**

There are three fundamental steps to creating a route:

---

1. **Import the Routing Module in the `_app.module.ts_` file**

Import the **AppRoutingModule** into the **AppModule** and add it to the imports array.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

2. **Import `RouterModule` and `Routes` into your routing module (`_AppRoutingModule_`)**

```typescript
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

const routes: Routes = []; // Array of routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

---

3. **Define routes in the `Routes` array**

Each route in the array is a JavaScript object with two properties. The first, **path**, defines the URL path for the route. The second, **component**, specifies the Angular component to use for the corresponding path.

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
```

---

### **Navigating Between Routes**

Navigation between routes can be achieved using the `_routerLink_` directive in templates or the `_Router_` service in code.

**Using `routerLink` in a Template**

```html
<a routerLink="/">Home</a>
<a routerLink="/about">About</a>
<a routerLink="/contact">Contact</a>
```

**Displaying Routes in the Template**

```html
<router-outlet></router-outlet>
```

**Programmatic Navigation with `_Router_`**

```typescript
import { Router } from '@angular/router';

// ...

constructor(private router: Router) {}

navigateToAbout() {
  this.router.navigate(['/about']);
}
```

---

### **Routing with Parameters**

You can pass parameters to routes to enable components to display specific information.

**Defining a Route with a Parameter**

```typescript
{ path: 'product/:id', component: ProductDetailsComponent }
```

**Accessing the Parameter in a Component**

```typescript
import { ActivatedRoute } from '@angular/router';

// ...

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const productId = params.get('id');
    // Logic to load product details by ID
  });
}
```

**Using `routerLink` in a Template**

```html
<a routerLink="/product/1">View Product</a>
```

---

### **Routing with Query Parameters**

Angular also supports **query parameters** to pass information between routes. Query parameters appear in the URL after the question mark (**?**) and are often used for filtering, sorting, or providing additional data.

**Steps to Define Routes with Query Parameters:**

1. **Define the Route in `_AppRoutingModule.ts_`**

```typescript
{ path: 'search', component: SearchComponent }
```

2. **Set Query Parameters in the Template**

```html
<a [routerLink]="['/search']" [queryParams]="{ filter: 'active', order: 'desc' }">Search</a>
```

**Accessing Query Parameters in the Component:**

1. Import the _ActivatedRoute_ module:

```typescript
import { ActivatedRoute } from '@angular/router';
```

2. Access the Query Parameters:

```typescript
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const filter = params['filter'];
    const order = params['order'];
    // Logic to handle query parameters
  });
}
```

**Programmatic Navigation with Query Parameters**

```typescript
import { Router } from '@angular/router';

// ...

constructor(private router: Router) {}

navigateWithQueryParams() {
  const queryParams = {
    filter: 'active',
    order: 'desc',
  };

  this.router.navigate(['/search'], { queryParams });
}
```

---

### **Routing with Redirects**

You can define redirects to ensure that outdated URLs are redirected to updated routes.

```typescript
{ path: 'old-page', redirectTo: '/new-route' }
```

---

### **Wildcard Routes**

To handle cases where users navigate to a non-existent part of your application, configure a wildcard route. Angular will select this route whenever the requested URL does not match any defined routes.

**Example**

```typescript
{ path: '**', component: PageNotFoundComponent }
```

The two asterisks indicate that this is a wildcard route. For the component property, you can specify any component in your app. Common choices include a dedicated **PageNotFoundComponent** for displaying a **404 page** or a redirect to the app's main component.

---

### **Route Guards**

Route guards allow you to control access to routes based on specific conditions, such as authentication or authorization.

```typescript
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Authentication logic here
  }
}
```

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create routers to switch between inserting, updating, and listing components of your model project in the previous task (14 services) to use it.

You can use task [Add Router to Insert and List Components](https://github.com/persapiens-classes/ifrn-ria-angular-example/issues/14) of the Angular Example Project.
