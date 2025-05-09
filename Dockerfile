# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Define Supabase build-time arguments
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Make build-time args available as environment vars during build
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}

# Copy only package files to install dependencies
COPY package*.json ./

# Install dependencies globally and add serve
RUN npm install && npm install -g serve

# Copy the rest of the application
COPY . .

# Build the Next.js static export
RUN npm run build:no-typecheck

# Expose the port the app will run on
EXPOSE 3001

# Start the app using `serve`
CMD ["serve", "-s", "out", "-l", "3001"]
