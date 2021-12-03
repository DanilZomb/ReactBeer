import React, {useEffect, useState} from "react";
import "./Kanban.css";
import {columnsRawData} from "../../KanbanData";
import {DragDropContext} from "react-beautiful-dnd";
import KanbanColumn from "./components/kanban-colums/KanbanColumn";
import KanbanModalColumn from "./components/kanban-modals/modal-colum/KanbanModalColumn";
import KanbanModalTask from "./components/kanban-modals/modal-task/KanbanModalTask"


export default function Kanban(props) {
    const [columns, setColumns] = useState(
        JSON.parse(window.localStorage.getItem("columns")) || columnsRawData
    );
    const [windows_, setWindows] = useState(
        JSON.parse(window.localStorage.getItem("windows")) || columnsRawData
    );
    const [modalTask, setModalTask] = useState(false);
    const [modalColumn, setModalColumn] = useState(false);


    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if (!destination) {
            console.log("no destination");
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            console.log("index and destination the same");
            return;
        }
        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            const swapTask = newTaskIds[source.index];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, swapTask);
            const newColumnsState = columns.map((c) => {
                if (c.id === start.id) {
                    c.taskIds = newTaskIds;
                    return c;
                } else return c;
            });
            const newColumnsState2 = [...newColumnsState];
            setColumns(newColumnsState2);
        } else {
            if (finish.taskIds.length < finish.limit) {
                const startTaskIds = Array.from(start.taskIds);
                const [item] = startTaskIds.splice(source.index, 1);
                const finishTaskIds = Array.from(finish.taskIds);
                finishTaskIds.splice(destination.index, 0, item);
                const newColumnsState = columns.map((c) => {
                    if (c.id === start.id) {
                        c.taskIds = startTaskIds;
                        return c;
                    } else if (c.id === finish.id) {
                        c.taskIds = finishTaskIds;
                        return c;
                    } else return c;
                });
                const newColumnsState2 = [...newColumnsState];
                setColumns(newColumnsState2);
            } else return;
        }
    };
    const openModalColumn = () => {
        setModalColumn(true)
        // const columnIdd = data.id;
        // setModalColumn(columnIdd); //todo: булевый стейт true/false, а ты сетаешь строку или номер
    };
    const openModalTask = (data) => {
        const columnId = data.id;
        setModalTask(columnId);
    };
    const closeModalColumn = () => {
        setModalColumn(false);
    };
    const closeModalTask = () => {
        setModalTask(false);
    };

   
    const addColumn = (newColumn) => {
        setModalColumn(false);
        const obj = {
            id: new Date().getMilliseconds(),
            color: 'blue',
            idWindow: new Date().getMilliseconds(),
            limit: 4,
            name: newColumn.name,
            taskIds: [],
        }
        
        //windows_.concat(obj)
        //console.log('test: ,', windows_.concat(obj))
        const updatedWindows = windows_.concat(obj)
        // const updatedWindows = windows_.map((windowEl) => {
        //     if (windowEl.id === newColumn.idWindow) {
        //         windowEl.push(newColumn);
        //         return windowEl;
        //     } else return windowEl;
        // });
      
        setWindows(updatedWindows);  
        setColumns(updatedWindows); //todo : разберись что тебе мапить
    };
    const addTask = (newTask) => {
        setModalTask(false);
        const updatedColumns = columns.map((column) => {
            if (column.id === newTask.idColumn && column.taskIds.length < 5) {
                column.taskIds.push(newTask);
                return column;
            } else return column;
        });
        setColumns(updatedColumns);
    };



    
    
    const removeColumn = (columnId) => {
         const updatedWindows = windows_.filter(
                       (windowEl) => windowEl.id !== columnId.id
                     )
        setWindows(updatedWindows);   
        setColumns(updatedWindows);
    };
    const removeTask = (taskId) => {
        const updatedColumns = columns
            .map((column) => {
                return Object.assign({}, column, {
                    taskIds: column.taskIds.filter(
                        (task) => task.id !== taskId
                    ),
                });
            })
            .filter((column) => column.taskIds.length >= 0);
        setColumns(updatedColumns);
    };










    const editColumn = (columnId, newName) => {
        const updatedWindows = windows_.map((windowEl) => {
                    if (windowEl.id === columnId.newName) {
                        windowEl.name = newName;
                        return windowEl;
                    }
                    return windowEl;
                })
                setWindows(updatedWindows);
        setColumns(updatedWindows);
    };
    const editTask = (taskId, newUser, newText) => {
        const updatedColumns = columns.map((column) => {
            return Object.assign({}, column, {
                taskIds: column.taskIds.map((task) => {
                    if (task.id === taskId) {
                        task.user = newUser;
                        task.text = newText;
                        return task;
                    }
                    return task;
                }),
            });
        });
        setColumns(updatedColumns);
    };
    useEffect(() => {
        window.localStorage.setItem("columns", JSON.stringify(columns));
    }, [columns]);
    useEffect(() => {
        window.localStorage.setItem("windows", JSON.stringify(windows_));
    }, [windows_]);
    return (
        <>
            <div className="KanbanColumn-footer">
                <button
                    className="KanbanColumn-btn-add"
                    onClick={() => openModalColumn(props.columnData)}
                >
                    Add Column
                </button>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="Kanban">
                    {modalColumn && (
                        <KanbanModalColumn
                            closeModalColumn={closeModalColumn}
                            addColumn={addColumn}
                            //columnData={modalColumn}
                        />
                    )}
                    {modalTask && (
                        <KanbanModalTask
                            closeModalTask={closeModalTask}
                            addTask={addTask}
                            columnData={modalTask}
                        />
                    )}
                    <h1 className="Kanban-title">Kanban</h1>
                    <div className="Kanban-columns-container">
                        {columns.map((c) => {
                            return (
                                <KanbanColumn
                                    columnData={c}
                                    key={c.name}
                                    editColumn={editColumn}
                                    removeColumn={removeColumn}
                                    openModalTask={openModalTask}
                                    removeTask={removeTask}
                                    editTask={editTask}
                                />
                            );
                        })}
                    </div>
                </div>
            </DragDropContext>
        </>
    );
};

