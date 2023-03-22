import "./App.css";
import Form from "./Components/Form/Form";

function App() {
    
    function onActivitySubmit(data) {
        console.log("onAddActivity", data);
    }
    return (
        <>
            <h1></h1>
            <Form onAddActivity={onActivitySubmit} />
        </>
    );
}

export default App;
