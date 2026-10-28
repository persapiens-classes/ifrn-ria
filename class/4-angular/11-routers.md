### **Angular Router**

Routing is a key part of modern web applications, enabling users to navigate between different sections of the app without reloading the page. Modern Angular uses a standalone-first architecture, where routing is configured via providers (provideRouter).

---

### **Setting Up Routing**

In modern Angular applications, routes are configured in `app.routes.ts` and provided in `app.config.ts`.

---

1. **Define Routes in `app.routes.ts`**

Routes are defined using the Routes type. You can load components eagerly or lazily using loadComponent:

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
```

---

2. **Provide the Router in `app.config.ts`**

Register the routes using `provideRouter`:

```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
```

---

3. Displaying Routes in Standalone Components

Import `RouterOutlet` and `RouterLink` directly into the component that hosts navigation:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
    </nav>

    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
```

---


### **Navigating Between Routes**

Declarative Navigation with `RouterLink`.

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

router = inject(Router);

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

route = inject(ActivatedRoute);

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
route = inject(ActivatedRoute)

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

router = inject(Router);

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

@Service()
export class AuthenticationGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Authentication logic here
  }
}
```

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Create routers to switch between inserting, updating, and listing components of your model project in the previous task (14 services).

You can use task [Add Router to Insert and List Components](https://github.com/persapiens-classes/account-frontend/issues/14) of the Account Frontend Example Project.
