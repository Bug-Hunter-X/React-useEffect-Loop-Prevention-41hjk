```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: no dependency array, effect runs only after mount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every 1 second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```