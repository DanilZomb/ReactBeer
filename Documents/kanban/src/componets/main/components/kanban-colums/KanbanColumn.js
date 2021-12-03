import React from "react";
import KanbanTask from "./component/KanbanTask";
import "./KanbanColumn.css";
import useToggle from "../useToggleState";
import KanbanColumnEditForm from "./column-edit-form/KanbanColumnEditForm";
import { Droppable } from "react-beautiful-dnd";

export default function KanbanColumn(props) {
     const [isEditingColumn, toggleColumn] = useToggle(true);

    return (
       <>


        <div
            className="KanbanColumn"
            style={{ backgroundColor: `${props.columnData.color}` }}
        >
            <div className="KanbanColumn-main">

               {isEditingColumn ? ( <h2 className="KanbanColumn-name" onClick={()=>toggleColumn(!isEditingColumn)}>{props.columnData.name}</h2>) : (<KanbanColumnEditForm
        editColumn={props.editColumn}
        toggleColumn={toggleColumn}
        startName={props.columnData.name}
        />)}
                <p className="KanbanColumn-numbers">
                    {props.columnData.taskIds.length} / {props.columnData.limit};
                </p>
                <Droppable droppableId={`${props.columnData.id - 1}`}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            className="KanbanColumns-tasks-container"
                            {...provided.droppableProps}
                        >
                            {props.columnData.taskIds.map((task, index) => {
                                return (
                                    <KanbanTask
                                        key={task.id}
                                        id={task.id}
                                        task={task}
                                        color={props.columnData.color}
                                        index={index}
                                        removeTask={props.removeTask}
                                        editTask={props.editTask}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <div className="KanbanColumn-footer">
                <button
                    className="KanbanColumn-btn-add"
                    onClick={() => props.openModalTask(props.columnData)}
                >
                    Add task
                </button>

                <button
                    onClick={() => props.editColumn(props.columnData)}
                >
                    Edit Column
                </button> 

                 <button
                    onClick={() => props.removeColumn(props.columnData)}
                >
                    Remove Column
                </button> 
            </div>
        </div>
        
     </>
    );
};

