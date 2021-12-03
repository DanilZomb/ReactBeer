import React from "react";
import "./KanbanModalColumn.css";
import useInputState from "../../useInputState";
import { v4 as uuidv4 } from "uuid";

export default function KanbanModalColumn(props){
    const [name, handleChangeName] = useInputState("");

    const newColumn = { name };

    return (
        <div className="KanbanModal">
            <section className="KanbanModal-content">
                <span
                    className="KanbanModal-close-btn"
                    onClick={props.closeModalColumn}
                />
                <form
                    className="KanbanModal-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.addColumn(newColumn);
                    }}
                >
                    <div className="KanbanModal-input-container">
                        <label htmlFor="user">Name: </label>
                        <input
                            className="KanbanModal-input"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </div>
                    <button className="KanbanModal-input-submit-btn">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};


