```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User types note and clicks "Save"
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Payload: {content: "...", date: "..."}
    
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note over browser: browser executes callback to update the DOM
    Note over browser: new note appears on screen without reloading