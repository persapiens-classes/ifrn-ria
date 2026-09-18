## Angular Directives

Directives are a fundamental part of Angular, allowing you to extend HTML syntax to **add custom behaviors** to page elements.

There are three main types of directives in Angular:

- Structural Directives  
- Component Directives  

#### Structural Directives

Structural Directives manipulate the DOM structure by adding or removing HTML elements from the template. They are applied as structural attributes on HTML elements.

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
