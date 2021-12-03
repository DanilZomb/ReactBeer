import { v4 as uuidv4 } from "uuid";

const taskLimitNumber = 4;

export let columnsRawData = [
    {
        id: 1,
        name: "Pending",
        limit: taskLimitNumber,
        idWindow: 2,
        color: "#A162D8 ",
        taskIds: [
            {
                id: uuidv4(),
                text: "Status component",
                idColumn: 1,
                user: "Anna",
            },
            {
                id: uuidv4(),
                text: "New slides for presentation",
                idColumn: 1,
                user: "Anna",
            },
        ],
    },
    {
        id: 2,
        name: "Analysis - Doing",
        limit: taskLimitNumber,
        idWindow: 2,
        color: "#5A9DF9",
        taskIds: [
            { id: uuidv4(), text: "Blog assets", idColumn: 2, user: "David" },
        ],
    }
]
    
