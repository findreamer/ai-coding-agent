# AI Coding Agent

## Overview

The AI Coding Agent is a tool designed to assist with coding tasks, leveraging various AI models and tools to provide intelligent code generation and execution.

## Features

- **Core Functionality**: Executes code using TypeScript and Node.js.
- **AI Integration**: Utilizes AI models such as OpenAI and Ollama for intelligent code suggestions and execution.
- **Development Workflow**: Supports development, testing, and deployment through dedicated scripts.

## Scripts

- `commit`: Commits code changes using committier.
- `start`: Starts the application with `tsx src/main.ts`.
- `dev`: Starts the development server with `tsx --watch src/main.ts`.
- `test`: Runs tests using `tsx --test evals/**/*.test.ts`.

## Dependencies

- **AI Models**: ai, openai, ollama-ai-provider-v2
- **Development Tools**: typescript, tsx, biome, lefthook

## Development Environment

- **TypeScript**: Version 5.9.3
- **Biome**: Version 2.4.2
- **Node.js**: Supported via type definitions

## Tools

- **System Data Time**: Retrieves the current system date and time.
- **File Operations**: Supports reading, writing, and listing files.
- **Testing Framework**: Includes unit tests for various tools.

## Project Structure

- `src/` directory contains the main source code.
- `evals/` directory holds test cases for individual tools.
- Configuration files like `package.json`, `tsconfig.json`, and `biome.json` define project settings.

## License

This project is licensed under the ISC license.