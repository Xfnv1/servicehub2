# ServiceHub - Marketplace de Serviços

## Overview

ServiceHub is a Brazilian marketplace platform that connects service providers with clients seeking various services. The application enables users to find qualified service providers in their region, ranging from home cleaning to technical repairs. It features a comprehensive system for service discovery, booking, real-time communication, and payment processing.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling
- **Maps**: Leaflet for interactive maps and geolocation features

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful APIs with type-safe schemas
- **Session Management**: PostgreSQL-based session storage

### Project Structure
- **Monorepo**: Single repository with shared types and schemas
- **Client**: React frontend application
- **Server**: Express.js backend API
- **Shared**: Common TypeScript types and database schemas

## Key Components

### Database Schema
- **Users**: Role-based system (client, provider, admin)
- **Categories**: Service categories with icons and colors
- **Providers**: Extended user profiles with location and skills
- **Service Requests**: Client requests with geolocation
- **Reviews**: Rating and feedback system
- **Messages**: Real-time communication between users
- **Analytics**: Platform metrics and tracking

### Authentication & Authorization
- Role-based access control (client, provider, admin)
- Session-based authentication
- User profile management with avatar support

### Geolocation Services
- GPS-based location detection
- Radius-based provider search
- Interactive maps with clustered markers
- Distance calculation for service matching

### Real-time Features
- WebSocket-like message polling for chat
- Live service request updates
- Real-time notifications

## Data Flow

### Service Discovery Flow
1. Client requests location permission
2. System finds nearby providers within radius
3. Results displayed on map and list view
4. Client can filter by category, rating, and price

### Service Request Flow
1. Client creates service request with details
2. System notifies matching providers in area
3. Providers can accept/decline requests
4. Real-time chat enables communication
5. Service completion and payment processing

### Provider Onboarding
1. User registers with basic information
2. Provider profile creation with skills and rates
3. Location verification and service radius setup
4. Category selection and portfolio upload

## External Dependencies

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit
- **tsx**: TypeScript execution for development

### Production Dependencies
- **Database**: @neondatabase/serverless, drizzle-orm, drizzle-zod
- **UI Framework**: @radix-ui/* components, tailwindcss
- **Maps**: Leaflet (loaded via CDN)
- **Forms**: react-hook-form, @hookform/resolvers
- **State Management**: @tanstack/react-query
- **Utilities**: date-fns, clsx, class-variance-authority

### CDN Resources
- Leaflet maps and clustering
- Font Awesome icons
- Google Fonts (Inter)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle
- **Backend**: esbuild bundles Node.js server
- **Database**: Drizzle migrations for schema updates

### Environment Configuration
- **Development**: Hot module replacement with Vite
- **Production**: Static file serving with Express
- **Database**: Environment-based connection string

### Deployment Targets
- **Replit**: Primary deployment platform
- **Vercel/Netlify**: Alternative static hosting
- **Railway/Heroku**: Backend deployment options

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```