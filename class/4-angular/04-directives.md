## Angular Directives

Directives are a fundamental part of Angular, allowing you to extend HTML syntax to **add custom behaviors** to page elements.

There are three main types of directives in Angular:

- Attribute Directives  
- Structural Directives  
- Component Directives  

### Attribute Directives

Attribute Directives are used to change the behavior of existing HTML elements by adding or modifying attributes and behaviors. They are applied as attributes to elements in the template.

Examples:

```html
<!-- Attribute Directive ngStyle-->
<p [ngStyle]="{'background': isBlue ? 'blue' : 'red'}">I am an attribute directive</p>
```

```html
<!-- Attribute Directive ngClass-->
<p [ngClass]="{'background-green': isFlag, 'background-blue': !isFlag}">Attribute Directive - [ngClass]</p>
```

The **NgStyle** and **NgClass** directives are attribute directives used to dynamically alter the style of any DOM element based on a condition.

[Official Documentation for NgStyle](https://angular.dev/guide/directives#setting-inline-styles-with-ngstyle)  
[Official Documentation for NgClass](https://angular.dev/guide/directives#adding-and-removing-classes-with-ngclass)  

### Structural Directives

Structural Directives manipulate the DOM structure by adding or removing HTML elements from the template. They are applied as structural attributes on HTML elements.

#### ngIf Directive

Example:

```html
<!-- Structural Directive -->
<div *ngIf="showElement">This element will only display if showElement is true.</div>
```

Here, **'\*ngIf'** is a Structural Directive that adds or removes the `<div>` element based on the value of **'showElement'**.

[Official Documentation for NgIf](https://angular.dev/guide/directives#adding-or-removing-an-element-with-ngif)

#### ngFor Directive

The **\*ngFor** directive is one of the most commonly used structural directives in Angular. It allows you to iterate over a collection of items and render them in the template. Using \*ngFor, you can dynamically create lists, tables, or repeat elements based on the model's data.

Example:

The syntax for \*ngFor is simple and involves assigning a local variable to each item in the collection you want to iterate. The directive can be applied to any HTML element in the template.

```html
<div *ngFor="let item of items">{{ item }}</div>
```

In this example, we are iterating over a collection called _items_, and for each item in the collection, the template renders a new **<div>** containing the item's value.

**Item Index:** In addition to the item's value, you can access the item's index in the loop and track items by a unique property.

Accessing the Index:

```html
<div *ngFor="let item of items; let i = index">Item {{ i }}: {{ item }}</div>
```

[Official Documentation for NgFor](https://angular.dev/guide/directives#listing-items-with-ngfor)

#### ngSwitch, ngSwitchCase, and ngSwitchDefault Directive

The **ngSwitch** directive is a structural directive in Angular that allows you to create conditional statements in the template based on an expression. It provides a more readable and organized way to handle conditional logic than using multiple **\*ngIf** directives.

**ngSwitch Syntax:**

The **ngSwitch** syntax resembles a JavaScript switch. The **ngSwitch** directive is applied to a parent element containing multiple **ngSwitchCase** child elements and an optional **ngSwitchDefault** element.

```html
<div [ngSwitch]="expressionValue">
  <div *ngSwitchCase="value1">Content 1</div>
  <div *ngSwitchCase="value2">Content 2</div>
  <div *ngSwitchCase="value3">Content 3</div>
  <div *ngSwitchDefault>Default content</div>
</div>
```

1. The **[ngSwitch]** attribute receives an expression compared against the **ngSwitchCase** values.  
2. Each **ngSwitchCase** element contains a value that is compared with the **ngSwitch** expression. The content of the **ngSwitchCase** is rendered if the expression matches its value.  
3. The **ngSwitchDefault** element is optional and is rendered if the expression does not match any of the **ngSwitchCase** values.  

Example:

```html
<div [ngSwitch]="option">
  <p *ngSwitchCase="'A'">You chose option A</p>
  <p *ngSwitchCase="'B'">You chose option B</p>
  <p *ngSwitchCase="'C'">You chose option C</p>
  <p *ngSwitchDefault>Please choose a valid option (A, B, or C).</p>
</div>
```

**Note:**  

The **ngSwitchCase** value is enclosed in single quotes because it is a string. If you're using numbers or other variables, quotes are not required.

Using ngSwitch with Numbers:

```html
<div [ngSwitch]="optionNumber">
  <p *ngSwitchCase="1">You chose option 1</p>
  <p *ngSwitchCase="2">You chose option 2</p>
  <p *ngSwitchCase="3">You chose option 3</p>
  <p *ngSwitchDefault>Please choose a valid option (1, 2, or 3).</p>
</div>
```

[Official Documentation for NgSwitch](https://angular.dev/guide/directives#switching-cases-with-ngswitch)

#### New Syntax for Structural Directives

Starting with Angular 17, a new syntax for flow control in templates was introduced, replacing traditional structural directives like \*ngIf, \*ngFor, and \*ngSwitch. This new approach uses @if, @for, and @switch syntax, providing a more intuitive and JavaScript-like way to express conditional and loop logic in templates.

Example of @if, @for, @switch:

```javascript
@if (condition) {
  <!-- Content displayed when the condition is true -->
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}

@for (let item of list) {
  <!-- Content repeated for each item in the list -->
} @empty {
  <!-- Content displayed when the list is empty -->
}

@switch (variable) {
  @case ('value1') {
    <!-- Content for case 'value1' -->
  }
  @case ('value2') {
    <!-- Content for case 'value2' -->
  }
  @default {
    <!-- Default case content -->
  }
}
```

#### Custom Directive

You can also create your own custom Directives in Angular. To do this, you need to use the @Directive decorator and implement the required logic for the directive.

Example of a Custom Attribute Directive:

```typescript
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]", // Selector for using the directive in the template.
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlightText("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlightText(null);
  }

  private highlightText(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

Example:

```html
<!-- Attribute Directive -->
<p [appHighlight]="highlightText">This paragraph will be highlighted</p>
```

Here, **'appHighlight'** is a custom Attribute Directive that changes the style of the paragraph when **'highlightText'** is true.  
In this example, we created a custom Attribute Directive named **appHighlight**, which highlights the text of the element when the mouse enters its area and removes the highlight when the mouse leaves.

Use the following command to generate directives:

```node
ng generate directive <directiveName>
```

[Official Documentation for Building Directives - Standalone Project](https://angular.dev/guide/directives/attribute-directives)  
[Official Documentation for Building Directives - Module-Based Project](https://angular.dev/guide/directives/attribute-directives)

---

## Final Considerations

Directives are a powerful and versatile feature in Angular, allowing you to create custom and reusable behaviors in templates. By combining Directives with other Angular features like Data Binding and Services, you can build more interactive and dynamic web applications, facilitating the maintenance and development of rich user interfaces.
