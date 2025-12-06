# Use the official Node.js image as a base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app/frontend

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# For production, we would typically run `pnpm build` here.
# For development, we just need to copy the files and run dev server.
# Let's assume development for now, and the CMD will run `pnpm dev`

# Expose the port the Next.js application will run on
EXPOSE 3000

# Command to run the development server
CMD ["pnpm", "dev"]
