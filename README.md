# Data-Layer-react-
A data layer code for react



To access or modify the data layer in your codes use these lines of code


```javascript
import { useStateValue } from "./StateProvider";

function App{
  const [{ }, dispatch] = useStateValue()
  //use dispatch to modify the data in the data layer
  dispatch({
    type: "SET_DATA",
    data: //The data that you want to pass in,
  });
}
```

