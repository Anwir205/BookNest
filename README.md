# BookNest - Backend

BookNest is an online bookstore web application developed as a web development project. This repository contains the backend built with **Laravel 12**, providing RESTful APIs to support the frontend application built with React.

## Technologies Used
- **Backend:** Laravel 12 (PHP)
- **Database:** MySQL
- **Frontend:** ReactJS (separate repository)
- **Dependency Management:** Composer

## Features
- RESTful API development
- Book and category management
- Product management
- User account management
- Shopping cart management
- Order management

## Installation

1. Clone the repository:
   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:
   ```bash
   cd demo
   ```

3. Install dependencies:
   ```bash
   composer install
   ```

4. Create the environment file:
   ```bash
   cp .env.example .env
   ```

5. Generate the application key:
   ```bash
   php artisan key:generate
   ```

6. Configure your MySQL database in the `.env` file.

7. Run database migrations:
   ```bash
   php artisan migrate
   ```

8. Start the development server:
   ```bash
   php artisan serve
   ```

## Project Status
Currently under development.

## Author
Le Van Tinh
