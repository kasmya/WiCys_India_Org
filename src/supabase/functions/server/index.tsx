import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7fcbd367/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission
app.post("/make-server-7fcbd367/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const contactData = {
      id: contactId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: "new"
    };

    await kv.set(contactId, contactData);

    console.log(`Contact form submitted: ${contactId} from ${email}`);
    return c.json({ success: true, id: contactId, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return c.json({ error: "Failed to submit contact form" }, 500);
  }
});

// Event registration
app.post("/make-server-7fcbd367/register-event", async (c) => {
  try {
    const body = await c.req.json();
    const { eventTitle, name, email, phone } = body;

    if (!eventTitle || !name || !email) {
      return c.json({ error: "Event title, name, and email are required" }, 400);
    }

    const registrationId = `registration_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const registrationData = {
      id: registrationId,
      eventTitle,
      name,
      email,
      phone: phone || "",
      timestamp: new Date().toISOString(),
      status: "registered"
    };

    await kv.set(registrationId, registrationData);

    console.log(`Event registration: ${registrationId} for ${eventTitle} by ${email}`);
    return c.json({ success: true, id: registrationId, message: "Successfully registered for event" });
  } catch (error) {
    console.error("Error registering for event:", error);
    return c.json({ error: "Failed to register for event" }, 500);
  }
});

// Membership application
app.post("/make-server-7fcbd367/membership", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, organization, role, experience } = body;

    if (!name || !email) {
      return c.json({ error: "Name and email are required" }, 400);
    }

    const membershipId = `membership_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const membershipData = {
      id: membershipId,
      name,
      email,
      phone: phone || "",
      organization: organization || "",
      role: role || "",
      experience: experience || "",
      timestamp: new Date().toISOString(),
      status: "pending"
    };

    await kv.set(membershipId, membershipData);

    console.log(`Membership application: ${membershipId} from ${email}`);
    return c.json({ success: true, id: membershipId, message: "Membership application submitted successfully" });
  } catch (error) {
    console.error("Error submitting membership application:", error);
    return c.json({ error: "Failed to submit membership application" }, 500);
  }
});

// Chatbot conversation
app.post("/make-server-7fcbd367/chatbot-message", async (c) => {
  try {
    const body = await c.req.json();
    const { sessionId, message, sender, language } = body;

    if (!sessionId || !message || !sender) {
      return c.json({ error: "Session ID, message, and sender are required" }, 400);
    }

    const messageId = `chatbot_${sessionId}_${Date.now()}`;
    const messageData = {
      id: messageId,
      sessionId,
      message,
      sender,
      language: language || "en",
      timestamp: new Date().toISOString()
    };

    await kv.set(messageId, messageData);

    return c.json({ success: true, id: messageId });
  } catch (error) {
    console.error("Error saving chatbot message:", error);
    return c.json({ error: "Failed to save chatbot message" }, 500);
  }
});

// Get all submissions by prefix (for admin viewing)
app.get("/make-server-7fcbd367/submissions/:type", async (c) => {
  try {
    const type = c.req.param("type");
    const validTypes = ["contact", "registration", "membership", "chatbot"];

    if (!validTypes.includes(type)) {
      return c.json({ error: "Invalid submission type" }, 400);
    }

    const submissions = await kv.getByPrefix(`${type}_`);
    
    return c.json({ 
      success: true, 
      count: submissions.length,
      data: submissions 
    });
  } catch (error) {
    console.error(`Error fetching ${type} submissions:`, error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

// Get specific submission by ID
app.get("/make-server-7fcbd367/submission/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const submission = await kv.get(id);

    if (!submission) {
      return c.json({ error: "Submission not found" }, 404);
    }

    return c.json({ success: true, data: submission });
  } catch (error) {
    console.error("Error fetching submission:", error);
    return c.json({ error: "Failed to fetch submission" }, 500);
  }
});

Deno.serve(app.fetch);