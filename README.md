# AI Tutor Platform - Full Stack Monorepo

This repository contains the integrated components for the AI Tutor Platform, designed to provide real-time AI-powered tutoring assistance. It is structured as a monorepo, encompassing a frontend, a bot orchestrator, and a core AI tutor module.

## Project Structure

*   `frontend/`: The Next.js web application providing the user interface.
*   `app-prototype/`: A Python FastAPI application that acts as the bot orchestrator, handling Google Meet integration, audio capture, transcription, and communication between the frontend and the AI tutor module.
*   `ai-tutor-module/`: A Python FastAPI application that serves as the core AI tutor, responsible for analyzing transcripts, generating insights, and providing real-time assistance.

## Running the Application with Docker Compose (Recommended)

To simplify the setup and ensure consistent environments across different development machines (including Codespaces), the entire application stack can be run using Docker Compose.

### Prerequisites

*   **Docker Desktop** (or Docker Engine and Docker Compose) installed on your system.
*   **GEMINI_API_KEY**: An API key for Google Gemini. This is required by the `ai-tutor-module`.

### Setup and Startup

1.  **Clone the Repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Configure GEMINI_API_KEY:**
    Create a file named `.env` in the root of this project (where `docker-compose.yml` is located) and add your Gemini API key:
    ```
    GEMINI_API_KEY=your_google_gemini_api_key_here
    ```
    Alternatively, ensure the `GEMINI_API_KEY` environment variable is set in your shell before running Docker Compose.

3.  **Build and Run the Stack:**
    From the root directory of the project, execute the following command:
    ```bash
    docker-compose up --build
    ```
    *   The `--build` flag ensures that the Docker images for all services (frontend, app-prototype, ai-tutor) are built from their respective `Dockerfile`s. This step might take a while on the first run.
    *   To run the services in the background (detached mode), add the `-d` flag: `docker-compose up --build -d`.

4.  **Access the Frontend:**
    Once all services are up and running, open your web browser and navigate to:
    ```
    http://localhost:3000
    ```
    If you are running in a Codespace environment, your frontend might be accessible via a public URL (e.g., `https://<codespace-name>-3000.app.github.dev`). Check the "Ports" tab in your Codespace UI for the correct URL.

### Stopping the Application

To stop all running services and remove the containers, networks, and volumes created by Docker Compose, run the following command from the root directory:
```bash
docker-compose down
```

### Troubleshooting

*   **"No space left on device" error during build:** This indicates insufficient disk space. Free up space in your environment (e.g., `docker system prune` to remove unused Docker data) or increase your allocated disk space if in a cloud environment like Codespaces.
*   **Frontend "Network Error" or "Connection Refused":**
    *   Ensure all backend services (`app-prototype`, `ai-tutor`, `redis`) are running.
    *   Verify that your `GEMINI_API_KEY` is correctly configured.
    *   If in Codespaces and accessing the frontend via HTTPS, ensure the backend services are also accessible via HTTPS (this is handled automatically by Docker Compose when ports are forwarded, but mixed content can still be an issue if direct `http://localhost` is attempted). The provided Docker Compose setup ensures inter-service communication uses service names, which simplifies this.

## Contributing

Please refer to the `CONTRIBUTING.md` file for contribution guidelines.
