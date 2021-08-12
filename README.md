# Data-Layer-react-
A data layer code for react



To access or modify the data layer from any codes use these lines of code


```javascript
import { useStateValue } from "./StateProvider";

function App{
  const [{ data }, dispatch] = useStateValue()
  
  //What you pass in the curly brackets is what's going to be accessible by the code
  console.log(data);
  
   //use dispatch to modify the data in the data layer
  dispatch({
    type: "SET_DATA",
    data: 'hello world'//The data that you want to pass in,
  });
  console.log(data);
}
```


Go to reducer.js to make some modifications

```javascript
export const initialState = {
  data: null, // this where you store the data, you can have as many elements as you want
};

const reducer = (state, action) => {
  switch (action.type) {
    // Here you can write your different cases
    case "SET_DATA":
      return{
        ...state,
        data: action.data // pass in the data sent by App.js. In this case data is going to become "Hello World"
      };
    default:
      return state;
  }
};

export default reducer;
```

