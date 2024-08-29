## Safemode

Safemode is a mobile and web application designed to help parents monitor their children's real-time location and track location history. The app ensures that parents can always stay informed about their children's whereabouts, enhancing safety and peace of mind.

### Key Features

- **Real-Time Location Tracking**: The app provides live updates on the child's location, allowing parents to monitor movements in real-time.
- **Location History**: Parents can view a history of their child's locations over a specified period, making it easy to track past movements.
- **Cross-Platform Support**: The app is built to run on both Android and iOS devices using Capacitor, ensuring wide accessibility.
- **Multi-Language Support**: Integrated with `i18next`, the app supports multiple languages, making it usable for a diverse audience.
- **Secure Authentication**: The app features an in-house authentication system using JWT.

### Technology Stack

- **Frontend**: Built with Next.js (pages directory).
- **State Management**: Utilizes Redux Toolkit for managing application state efficiently.
- **GraphQL API**: Powered by Apollo Client and Server, the app uses GraphQL to efficiently query and manage data.
- **Database**: Typegoose is used with MongoDB for data persistence, ensuring scalable and flexible data storage.
- **Backend**: The backend is handled using microservices, with `micro` providing a lightweight framework for the server.
- **Mobile Integration**: Leveraging Capacitor, the app integrates seamlessly with native Android and iOS functionalities.
- **Form Handling**: The app uses Mantine's form and UI components to ensure a smooth and user-friendly experience.

### Development and Deployment

- **Development Tools**: The app is developed using modern JavaScript tooling, including TypeScript for type safety, ESLint for linting, and concurrently for running multiple commands.
- **Build and Deployment**: The app is built using Next.js commands for both web and mobile platforms, with dedicated scripts for Android and iOS builds.
- **Testing and Tunneling**: Local testing and development are facilitated by localtunnel, allowing external access to the app during development.

This app combines modern web and mobile development practices to create a secure, reliable, and user-friendly solution for child tracking, offering peace of mind to parents and guardians.
