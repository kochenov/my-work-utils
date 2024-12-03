
# Project Documentation: Quasar Schedule Application

This project is a Quasar-based web application designed to generate and visualize work schedules. The application allows users to input rotation parameters, calculates work/rest days, and visualizes the schedule on a calendar.

---

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
4. [Components](#components)
5. [State Management](#state-management)
6. [Event Flow](#event-flow)
7. [Usage](#usage)
8. [Future Improvements](#future-improvements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features

- **Dynamic Schedule Generation**:
  - Users can define working days, rest days, and rotation period.
  - Calculates total working/rest days and predicts income.
- **Interactive Calendar**:
  - Displays work/rest days and rotation end on a calendar.
  - Allows clicking on dates to view detailed information.
- **Dialog System**:
  - Provides additional details about specific dates in a modal dialog.
- **Reactive State Management**:
  - Utilizes Pinia for managing application state.

---

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── ScheduleForm.vue  # Form for inputting schedule parameters
│   │   ├── ScheduleSummary.vue  # Displays calculated summary
│   │   ├── ScheduleCalendar.vue  # Interactive calendar component
│   │   ├── DateDialog.vue  # Dialog for date-specific information
│   ├── stores/
│   │   ├── schedule.js  # Pinia store for managing application state
│   ├── App.vue  # Root application component
│   ├── main.js  # Entry point for the application
├── public/  # Static assets
├── README.md  # Documentation file
```

---

## Setup and Installation

### Prerequisites
- Node.js (>= 14.x)
- Yarn or npm
- Quasar CLI (>= 2.x)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/quasar-schedule-app.git
   cd quasar-schedule-app
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Run the development server:
   ```bash
   quasar dev
   ```

---

## Components

### ScheduleForm.vue
- A form for user input to define working/rest days and rotation period.
- Emits a schedule generation event.

### ScheduleSummary.vue
- Displays a summary of total working/rest days and predicted income.

### ScheduleCalendar.vue
- Renders an interactive calendar showing schedule events with color-coded markers.

### DateDialog.vue
- Displays detailed information for a selected date in a modal dialog.

---

## State Management

Pinia is used for centralized state management:
- **Store**: `schedule.js`
  - Tracks user inputs (working days, rest days, etc.).
  - Stores calculated schedule events.
  - Manages dialog visibility and content.

---

## Event Flow

1. User inputs schedule parameters in `ScheduleForm`.
2. On submission, schedule data is processed and stored in the Pinia store.
3. `ScheduleSummary` listens for changes in the store to display updated totals.
4. `ScheduleCalendar` fetches events from the store to render the calendar.
5. Clicking on a calendar date triggers a dialog with detailed information.

---

## Usage

1. Define your work schedule in the input form.
2. Click "Generate Schedule" to create and visualize the schedule.
3. View working/rest days on the calendar.
4. Click on a calendar date to see detailed information.

---

## Future Improvements

- **Localization**:
  - Add support for multiple languages.
- **API Integration**:
  - Save/load schedules from a backend.
- **User Authentication**:
  - Allow users to save their preferences and schedules.
- **Advanced Analytics**:
  - Provide detailed income and time analytics.
- **Mobile Optimization**:
  - Ensure seamless usability on mobile devices.

---

## Contributing

We welcome contributions! To get started:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
