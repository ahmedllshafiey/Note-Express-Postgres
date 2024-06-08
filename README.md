# Notes Managment API

### Installation Instructions

#### Prerequisites
- Node.js installed on your machine
- PostgreSQL database

#### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   POSTGRES_DB=your_database_name
   POSTGRES_HOST=your_database_host
   POSTGRES_PORT=your_database_port
   POSTGRES_USER=your_database_username
   POSTGRES_PASSWORD=your_database_password
   ```

5. Run the database migrations to create the necessary tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Start the server:
   ```bash
   npm start
   ```

7. The server should now be running. You can access the API endpoints using the base URL `http://localhost:8080/api/v1/note`.

8. You can test the API endpoints using tools like Postman or curl.

That's it! You have successfully installed and set up the API.

### API Documentation

#### Introduction
This API allows you to manage notes. You can create, update, delete, and retrieve notes using the provided endpoints.

#### Base URL
The base URL for all endpoints is `http://localhost:8080/api/v1/note`.

#### Authentication
No authentication is required to access these endpoints.

#### Errors
- All error responses will have a JSON format with a `status` and `message` field.
- Status codes:
  - 400: Bad Request
  - 404: Not Found
  - 500: Internal Server Error

### Endpoints

#### Create a Note
- **Endpoint:** `POST /`
- **Description:** Creates a new note with the provided name and description.
- **Request Body:**
  - `name` (string, required): Name of the note.
  - `description` (string, required): Description of the note.
- **Success Response:**
  - **Status Code:** 200
  - **Response Body:**
    ```json
    {
        "status": "Created",
        "message": "Note successfully created",
        "data": {
            "id": 1,
            "name": "Example Note",
            "description": "This is an example note"
        }
    }
    ```
- **Error Response:** 
  - **Status Code:** 400
  - **Response Body:** 
    ```json
    {
        "status": "Bad Request",
        "message": "Error message"
    }
    ```

#### Update a Note
- **Endpoint:** `PATCH /:id`
- **Description:** Updates the note with the specified ID.
- **Request Parameters:** 
  - `id` (integer, required): ID of the note to be updated.
- **Request Body:**
  - `name` (string, optional): New name of the note.
  - `description` (string, optional): New description of the note.
- **Success Response:**
  - **Status Code:** 200
  - **Response Body:**
    ```json
    {
        "status": "Updated",
        "message": "Note successfully updated",
        "data": {
            "id": 1,
            "name": "Updated Note",
            "description": "This is an updated note"
        }
    }
    ```
- **Error Response:** 
  - **Status Code:** 400
  - **Response Body:** 
    ```json
    {
        "status": "Bad Request",
        "message": "Error message"
    }
    ```

#### Delete a Note
- **Endpoint:** `DELETE /:id`
- **Description:** Deletes the note with the specified ID.
- **Request Parameters:** 
  - `id` (integer, required): ID of the note to be deleted.
- **Success Response:**
  - **Status Code:** 200
  - **Response Body:**
    ```json
    {
        "status": "Deleted",
        "message": "Note successfully deleted"
    }
    ```
- **Error Response:** 
  - **Status Code:** 500
  - **Response Body:** 
    ```json
    {
        "status": "Error",
        "message": "Failed to delete note"
    }
    ```

#### Get All Notes
- **Endpoint:** `GET /`
- **Description:** Retrieves all notes.
- **Success Response:**
  - **Status Code:** 200
  - **Response Body:**
    ```json
    {
        "status": "OK",
        "message": "Notes successfully retrieved",
        "data": [
            {
                "id": 1,
                "name": "Example Note 1",
                "description": "This is an example note 1"
            },
            {
                "id": 2,
                "name": "Example Note 2",
                "description": "This is an example note 2"
            }
        ]
    }
    ```
- **Error Response:** 
  - **Status Code:** 500
  - **Response Body:** 
    ```json
    {
        "status": "Error",
        "message": "Failed to retrieve notes"
    }
    ```

#### Get Note by ID
- **Endpoint:** `GET /:id`
- **Description:** Retrieves the note with the specified ID.
- **Request Parameters:** 
  - `id` (integer, required): ID of the note to be retrieved.
- **Success Response:**
  - **Status Code:** 200
  - **Response Body:**
    ```json
    {
        "status": "OK",
        "message": "Note successfully retrieved",
        "data": {
            "id": 1,
            "name": "Example Note",
            "description": "This is an example note"
        }
    }
    ```
- **Error Response:** 
  - **Status Code:** 404
  - **Response Body:** 
    ```json
    {
        "status": "Error",
        "message": "Note not found"
    }
    ```
  - **Status Code:** 500
  - **Response Body:** 
    ```json
    {
        "status": "Error",
        "message": "Failed to retrieve note"
    }
    ```