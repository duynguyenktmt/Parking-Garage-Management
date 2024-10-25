# Parking-Garage-Management

High-Level Architecture:
Frontend (React)

Back Office Dashboard: A React-based UI for managing parking garage operations.
User Interface: A customer-facing interface for booking parking spots.
API Gateway (Zuul)

Routes requests to appropriate microservices and handles cross-cutting concerns like security and logging.
Microservices Layer

Core Services (Spring Boot)
Parking Management Service
Transaction Management Service
Notification Service
User Management Service
Integration Services (Spring Boot)
Dashboard Service
Chatbot Service (Python LLM)
Common Modules

Payment Module (NestJS)
LLM Features (Python)
Middleware

Kafka: For asynchronous communication.
Redis: For caching, session management, and transient data storage.
Connection Pooling Service: Manages database connections.
Service Discovery (Eureka)

Allows microservices to discover each other dynamically, making it easier to scale and manage services.
Client-Side Load Balancing (Ribbon)

Integrates with services to distribute requests among instances, improving fault tolerance.
Circuit Breaker (Hystrix)

Provides fault tolerance by preventing cascading failures and allowing fallback methods.
Database Layer

MySQL/PostgreSQL: For core data management (persistent storage).
Redis: For caching frequently accessed data and managing transient data.
Logging Database: For logs and transaction details.
Infrastructure

Docker: For containerization.
Kubernetes: For orchestration.
Monitoring Tools: Prometheus and Grafana for monitoring service health and performance metrics.
