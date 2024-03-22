Based on the BurnPage component , here are the five components i created and the reasons why they are considered as components:
1. BurnButtonBar:
Encapsulates a distinct UI section: This component represents a self-contained section of the UI responsible for handling the burn button, input field, and transaction links. It has its own state and logic for managing user interactions within that section.
Promotes reusability: If you need to use the burn button bar in other parts of your application, you can easily reuse this component without duplicating code.
2. BurnStatsContainer:
Encapsulates a distinct UI section: This component represents a self-contained section of the UI responsible for displaying burn statistics, including the supply bar, labels, and values. It has its own logic for calculating and formatting the data to be displayed.
Promotes reusability: If you need to display burn statistics in other parts of your application, you can reuse this component.
3. TransactionTable:
Encapsulates a distinct UI section: This component represents a self-contained section of the UI responsible for displaying the list of burn transactions. It has its own logic for rendering the table and handling data updates.
Promotes reusability: If you need to display transaction tables in other parts of your application, you can reuse this component.
4. ChainSelector:
Encapsulates a distinct UI section: This component represents a self-contained section of the UI responsible for allowing users to switch token chains. It has its own state and logic for managing the selected chain and updating the UI accordingly.
Promotes reusability: If you need to provide chain selection functionality in other parts of your application, you can reuse this component.
5. AppToast:
Encapsulates a distinct UI section: This component represents a self-contained section of the UI responsible for displaying toast notifications. It has its own logic for managing the display and dismissal of toasts.
Promotes reusability: If you need to display toast notifications in other parts of your application, you can reuse this component.
By dividing the BurnPage component into these smaller, more focused components, you're following best practices for React development and creating a more modular, maintainable, and testable codebase. Each component has a clear responsibility and can be developed and tested independently, making it easier to manage the complexity of your application.
