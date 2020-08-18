# Intervals

Building on our understanding of JavaScript, CSS, and HTML, we will investigate _time_ as an element in building experiences on the web. Our investigation will be in the form of a single webpage that is responsive to time/duration.

The subject matter, or theme, of the page is open to any direction. The decided upon theme should be purposeful, well considered, and frames the element of time/duration well to create a compelling experience. Additionally, consider your approach to time/duration as you approach the assignment. For example, we can reflect on the time of day a visitor encounters your work, or a set cadence of events as one approaches the experience in their browser.

It's suggested that you leave comments in the code to help viewers understand what the intended interaction/event should be.

### On Time

TBD

### JavaScript

The production of the assignment may require the use of JavaScript methods that allow for an operation to be conducted over time. These methods, `setTimeOut` and `setInternal`, look similar but are different in how an operation is executed.

`setTimeout()` executes a function, after waiting a specified number of milliseconds. For example, a `window.alert` is shown, once, after 2 seconds:

```javascript
window.setTimeout(function () {
  window.alert
}, 2000, 'That was slow!')
```

`setInternal()` executes a function repeatedly. For example, a `window.alert` is shown every 5 seconds:

```javascript
window.setInterval(function () {
  window.alert
}, 5000, 'It has been 5 seconds!')
```

Note: Time in JavaScript is usually measured in milliseconds (ms). For example 2000 ms is equal to 2 seconds.

### Requirements

❑ Use of a timer (Incrementing up or down, current time, duration)
❑ A primary element that changes given the timer
❑ Site should be viewable by anyone with the URL
❑ A place that describes what describes to a visitor the intent of the experience

### References and Examples

- http://screentimeclock.net/
- http://work.damonzucconi.com/coordinated-mars-time/
- http://hummingbirdclock.info/
- https://www.usdebtclock.org/
- https://www.withoutorder.com/
- http://whatcolorisit.sumbioun.com/
- https://otherti.me/tic/tac/
- https://still-here.net/
