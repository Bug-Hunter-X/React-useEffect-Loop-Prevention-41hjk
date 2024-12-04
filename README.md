# React useEffect Infinite Loop
This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the useEffect hook.  The bug involves adding the state variable to the dependency array of useEffect, resulting in the effect constantly re-running, leading to an infinite loop.

## Bug Description
The `MyComponent` component uses `useState` to manage a `count`. The `useEffect` hook attempts to increment `count` on every render. However, because `count` is included in the dependency array, the effect triggers again, creating a continuous cycle. This causes the browser to become unresponsive. 

## Solution
The solution involves removing `count` from the dependency array or using a different approach that avoids the continuous state update. 