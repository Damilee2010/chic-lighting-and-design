import React, { useState, useEffect } from "react";

function New() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const savedData = localStorage.getItem("data-Input");
        if (savedData) {
            setData(JSON.parse(savedData));
        } else {
            localStorage.setItem("data-Input", JSON.stringify([]));
        }
    }, []);

    const addNewInput = () => {
        if (!input.trim()) return;
        const newItem = { text: input.trim(), completed: false };
        const updatedData = [...data, newItem];
        setData(updatedData);
        localStorage.setItem("data-Input", JSON.stringify(updatedData));
        setInput("");
    };

    const completeInput = (index) => {
        const updatedList = data.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setData(updatedList);
        localStorage.setItem("data-Input", JSON.stringify(updatedList));
    };

    const deleteInput = (index) => {
        const updatedList = data.filter((_, i) => i !== index);
        setData(updatedList);
        localStorage.setItem("data-Input", JSON.stringify(updatedList));
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNewInput()}
                placeholder="Enter a new todo"
            />
            <button onClick={addNewInput}>Add</button>
            <hr />
            <div>
                {data.length > 0 ? (
                    <ol>
                        {data.map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    textDecoration: item.completed ? "line-through" : "none",
                                    opacity: item.completed ? 0.6 : 1,
                                }}
                            >
                                {item.text}
                                <button onClick={() => completeInput(index)}>
                                    {item.completed ? "✅" : "❌"}
                                </button>
                                <button onClick={() => deleteInput(index)}>🗑️</button>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p>Add a new todo</p>
                )}
            </div>
        </div>
    );
}

export default New;