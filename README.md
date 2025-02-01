# React useEffect setInterval Bug

This repository demonstrates a common, yet subtle bug in React applications involving the `useEffect` hook and `setInterval`. The issue arises from a misinterpretation of how to use `setInterval` within the `useEffect` cleanup function.

## Bug Description

The provided `MyComponent` attempts to increment a counter every second using `setInterval`. However, it fails because the `incrementCount` function is defined within `useEffect`, but its invocation is omitted in the `setInterval` method.