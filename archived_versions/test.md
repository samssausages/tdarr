```mermaid
flowchart TD
    A[Start] --> B{Is it raining?}
    B -->|Yes| C[Take umbrella]
    B -->|No| D[Enjoy the weather]
    C --> E[Go outside]
    D --> E
