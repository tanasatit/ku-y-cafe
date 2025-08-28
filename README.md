# Y-Cafe

Y-Cafe is a modern cafeteria web application built with Next.js. It features an intuitive user interface with multiple pages, including Home, Menu, Revenue, Stock, and Contact pages, designed to streamline the management and presentation of cafeteria services.

## Features

- **Home Page**: Welcome users with an overview of the cafeteria, highlights, and featured items.
- **Menu Page**: Display the complete menu with categories, prices, and item details.
- **Revenue Page**: View and analyze revenue data to help track sales performance.
- **Stock Page**: Manage and monitor cafeteria stock and inventory.
- **Contact Page**: Provide contact information and a form for customer inquiries.

## Technologies Used

- [Next.js](https://nextjs.org/) — React framework for server-side rendering and static site generation.
- React — UI library for building the user interface.
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework for rapid UI development.
- [shadcn/ui](https://ui.shadcn.com/) — A set of accessible, reusable UI components built with Tailwind CSS and Radix UI.
- Additional libraries/tools you used (e.g., charting libraries for revenue, form handling libraries, etc.)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or above)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/y-cafe.git
   cd y-cafe
   ```

2. Install dependencies:

   Using npm:

   ```
   npm install
   ```

   Or using yarn:

   ```
   yarn install
   ```

### Running the Development Server

Start the Next.js development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

To build the project for production:

```
npm run build
```

To start the production server after building:

```
npm start
```

## Project Structure

```
/pages          - Next.js pages (Home, Menu, Revenue, Stock, Contact)
/components     - Reusable UI components, including those from shadcn/ui
/public         - Public assets like images, icons
/styles         - Tailwind CSS configuration and styles
/utils          - Utility functions (optional)
/data           - Static or mock data (optional)
```

## Tailwind CSS & shadcn/ui Configuration

This project uses Tailwind CSS for styling and shadcn/ui components to build consistent and accessible UI elements efficiently. Make sure that Tailwind CSS is properly configured in your Next.js setup (see `tailwind.config.js`), and shadcn/ui components are imported as needed.

## Contribution

Feel free to fork the project and submit pull requests. For major changes, please open an issue first to discuss what you want to change.

## License

Specify your license here (e.g., MIT License)

---

Thank you for checking out Y-Cafe! If you have any questions or feedback, please contact the project maintainer.
