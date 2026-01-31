# WiCyS India - Backend Integration Documentation

## Overview
WiCyS India website is now integrated with Supabase backend to store and manage all user data persistently.

## What Data is Being Stored:

### 1. **Contact Form Submissions** (`/contact` route)
- Name, Email, Subject, Message
- Timestamp and Status
- Stored with prefix: `contact_`

### 2. **Event Registrations** (`/register-event` route)
- Event Title, Name, Email, Phone
- Registration timestamp and status
- Stored with prefix: `registration_`

### 3. **Membership Applications** (`/membership` route)
- Name, Email, Phone, Organization, Role, Experience
- Application timestamp and status
- Stored with prefix: `membership_`

### 4. **Chatbot Conversations** (`/chatbot-message` route)
- Session ID, Message content, Sender (user/bot), Language
- Complete conversation history with timestamps
- Stored with prefix: `chatbot_`

## Backend API Endpoints

All endpoints are prefixed with: `https://{projectId}.supabase.co/functions/v1/make-server-7fcbd367`

### POST `/contact`
Submit a contact form
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### POST `/register-event`
Register for an event
```json
{
  "eventTitle": "string",
  "name": "string",
  "email": "string",
  "phone": "string" (optional)
}
```

### POST `/membership`
Submit membership application
```json
{
  "name": "string",
  "email": "string",
  "phone": "string" (optional),
  "organization": "string" (optional),
  "role": "string" (optional),
  "experience": "string" (optional)
}
```

### POST `/chatbot-message`
Save chatbot message
```json
{
  "sessionId": "string",
  "message": "string",
  "sender": "user" | "bot",
  "language": "en" | "hi"
}
```

### GET `/submissions/:type`
Get all submissions by type
- Types: `contact`, `registration`, `membership`, `chatbot`
- Returns array of submissions

### GET `/submission/:id`
Get specific submission by ID

## Admin Dashboard

Access the admin dashboard at: `/admin`

Features:
- View all contact form submissions
- See event registrations
- Review membership applications
- Monitor chatbot conversations
- Real-time data refresh
- Submission counts and statistics

##  Working

1. **Frontend Forms**: Users fill out forms (contact, event registration, etc.)
2. **API Calls**: Forms submit data to backend API endpoints
3. **Supabase Storage**: Data is stored in Supabase key-value store
4. **Persistence**: All data persists even after page refresh
5. **Admin Access**: View all submissions via the admin dashboard

## Data Storage

All data is stored in the Supabase KV (Key-Value) store table: `kv_store_7fcbd367`

Each entry includes:
- Unique ID with timestamp
- All form data
- Timestamp (ISO format)
- Status field (new, registered, pending, etc.)

## Security Notes

**Important**: This is a prototype environment. 
For production use:
- Implement proper authentication for admin dashboard
- Add rate limiting to prevent abuse
- Validate and sanitize all inputs server-side
- Use environment variables for sensitive data
- Consider GDPR/privacy compliance for user data

## Testing the Backend

1. **Submit a contact form**: Go to `/contact` and fill out the form
2. **Register for an event**: Go to `/events` and click "Register Now"
3. **Chat with the bot**: Use the chatbot in the bottom right corner
4. **View submissions**: Navigate to `/admin` to see all stored data

## Troubleshooting

- **Data not saving**: Check browser console for API errors
- **Admin showing no data**: Refresh the page and check network tab
- **500 errors**: Check Supabase server logs in the console

## Next Steps

Consider adding:
- Email notifications when forms are submitted
- Export data to CSV functionality
- Advanced filtering and search in admin
- User authentication for secure access
- Automated responses to common inquiries
