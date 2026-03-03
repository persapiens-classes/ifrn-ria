## Tailwind CSS in Angular

Tailwind CSS is a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that can be composed to build any design, directly in your markup.

### Utility-First Concept

Instead of writing custom CSS with class names like `.btn-primary`, you use small, single-purpose classes to style elements. This approach offers several benefits:

- **Speed**: Build UI faster without switching between HTML and CSS files.
- **Safety**: Changes to one element won't accidentally break styles on other pages.
- **Consistency**: Use a predefined design system (colors, spacing, typography).

### Common Utility Classes

Tailwind provides thousands of classes. Here are some of the most common ones:

- **Layout**: `flex`, `grid`, `block`, `hidden`, `absolute`, `relative`.
- **Spacing**: `p-*` (padding), `m-*` (margin), `gap-*` (gap between elements).
- **Typography**: `text-xl`, `font-bold`, `italic`, `underline`, `text-gray-700`.
- **Colors**: `bg-blue-500`, `text-white`, `border-red-200`.
- **Sizing**: `w-full`, `h-64`, `max-w-sm`.

### Hover, Focus, and Responsive Variants

Tailwind allows you to apply utility classes conditionally based on the element's state or the screen size using prefixes.

**Example: Interactive Button**

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
  Save Changes
</button>
```

**Example: Responsive Layout**

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 1 column on mobile, 2 on tablets (sm), 4 on desktops (lg) -->
  <div class="bg-gray-100 p-4">Item 1</div>
  <div class="bg-gray-100 p-4">Item 2</div>
  <div class="bg-gray-100 p-4">Item 3</div>
  <div class="bg-gray-100 p-4">Item 4</div>
</div>
```

## :orange_book: Tailwind CSS documentation

[See official Tailwind CSS documentation about Utility Classes](https://tailwindcss.com/docs/styling-with-utility-classes).

## 👷 Task

Create pull requests for your project according to [Task Submission Guidelines.](../assessment.md#task-submission)

- Integrate Tailwind CSS into your Angular project (if not already done).
- Style the list and form components of your project using only Tailwind utility classes.
- Use at least one responsive prefix (e.g., `md:`) and one state prefix (e.g., `hover:`).

You can use the [Tailwind CSS Components](https://tailwindui.com/components) for inspiration.
