// const getDataFromLocal = () => {
//   return JSON.parse(localStorage.getItem("appointMentData"));
// };

// const initialState = getDataFromLocal() || [];
// console.log(initialState)

// async const result= fetch('http://localhost:5000/task')
//   .then(response => response.json())
//   .then(data => await console.log(data))
//   .catch(err => console.error(err));

async function result() {
  let response = await fetch('http://localhost:5000/task');
  let user = await response.json();
  console.log(user)
  return user
};
const results = result()

const initializer = [results]
const reducer = (state = initializer, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      state = [...state, action.payload];
      console.log(state)
      fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Do some stuff ...
          console.log(data)
        })
        .catch((err) => console.log(err));
      // localStorage.setItem("appointMentData", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
