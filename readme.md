# B12-A05 Emergency Hotline - Q&A

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** All of the functions mentioned above are used to select HTML Element (or Elements) from the DOM. The difference between them as follows:

**_getElementBYId:_** Returns the HTML Element with given ID. It returns a single `HTMLElement` or `null` if not found.

**_getElementsByClassName:_** Returns all HTML Elements with the given class name. It returns a live `HTMLCollection` (which updates automatically when the document changes).

**_querySelector:_** Returns the first HTML Element that matches the given CSS selector. It returns a single `HTMLElement` or `null` if not found.

**_querySelectorAll:_** Returns all HTML Elements that match the given CSS selector. It returns a static `NodeList` (which does not update automatically when the document changes).

### 2. How do you **create and insert a new element into the DOM**?

**Answer:** To create and insert a new element into the DOM, I would do the following:

```js
const newElement = document.createElement("h1");
newElement.textContent = "Programming Hero";
document.body.appendChild(newElement);
```

### 3. What is **Event Bubbling** and how does it work?

**Answer:** Event Bubbling is a type of event propagation in HTML when an event starts from the most specific element (the target element) and then flows upward to the least specific one (the document or window). In other words, when an event is triggered on an element, it first runs the handlers on that element, then on its parent, then all the way up to the document.

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer:** Event Delegation is a technique in JavaScript where a single event listener is added to a parent element instead of adding individual listeners to each child element.

This is useful for improving performance and managing events more easily.

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer:** The `preventDefault()` method is used to prevent the default action of an element from occurring. For example, it can be used to prevent a form from being submitted.

On the other hand, the `stopPropagation()` method is used to stop the Event Bubbling (i.e., stop the event from bubbling up to parent elements).
