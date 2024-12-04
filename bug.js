```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting count inside the useEffect dependency array
    setCount(count + 1); 
  }, [count]); // count is in the dependency array, creating an infinite loop

  return <div>Count: {count}</div>;
}
```