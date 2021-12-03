import React from "react";
import useInputState from "../../useInputState";
import "./KanbanColumnEditForm.css";

export default function KanbanColumnEditForm(props){
    const [name, handleChangeName] = useInputState(props.startName);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.editColumn(name);
                props.toggleColumn();
            }}
            className="KanbanEditForm"
        >
         
            <div className="KanbanEditForm-input-container">
                <label htmlFor="user">Name: </label>
                <input
                    className="KanbanEditForm-input"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChangeName}
                    required
                ></input>
            </div>
            <button
                className="KanbanEditForm-btn"
                style={{ backgroundColor: `${props.color}` }}
            >
                Save
            </button>
        </form>
    );
};

