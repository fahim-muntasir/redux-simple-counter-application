const resultUi = document.getElementById("result");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const inputNumber = document.getElementById("inputNumber");

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "counter/increment":
            return { ...state, value: state.value + payload };

        case "counter/decrement":
            return state?.value !== 0
                ? { ...state, value: state.value - payload }
                : state;

        case "counter/reset":
            return { ...state, value: 0 };

        default:
            return state;
    }
};

const store = Redux.createStore(counterReducer);

const render = () => {
    const { value } = store.getState();
    resultUi.innerText = value.toString();
};

render();

store.subscribe(render);

incrementBtn.addEventListener("click", (e) => {
    store.dispatch({
        type: "counter/increment",
        payload: Number(inputNumber.value),
    });
});

decrementBtn.addEventListener("click", (e) => {
    store.dispatch({
        type: "counter/decrement",
        payload: Number(inputNumber.value),
    });
});

resetBtn.addEventListener("click", (e) => {
    store.dispatch({ type: "counter/reset" });
    inputNumber.value = 1;
});
