import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-7fcbd367`;

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Submit contact form
export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Contact form submission error:', result);
      throw new Error(result.error || 'Failed to submit contact form');
    }

    console.log('Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

// Register for event
export async function registerForEvent(data: {
  eventTitle: string;
  name: string;
  email: string;
  phone?: string;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/register-event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Event registration error:', result);
      throw new Error(result.error || 'Failed to register for event');
    }

    console.log('Event registration successful:', result);
    return result;
  } catch (error) {
    console.error('Error registering for event:', error);
    throw error;
  }
}

// Submit membership application
export async function submitMembershipApplication(data: {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  experience?: string;
}): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/membership`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Membership application error:', result);
      throw new Error(result.error || 'Failed to submit membership application');
    }

    console.log('Membership application submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting membership application:', error);
    throw error;
  }
}

// Save chatbot message
export async function saveChatbotMessage(data: {
  sessionId: string;
  message: string;
  sender: 'user' | 'bot';
  language: 'en' | 'hi';
}): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/chatbot-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Chatbot message save error:', result);
      // Don't throw error for chatbot messages - just log it
      return { success: false, error: result.error };
    }

    return result;
  } catch (error) {
    console.error('Error saving chatbot message:', error);
    return { success: false, error: 'Failed to save message' };
  }
}

// Get submissions (for admin purposes)
export async function getSubmissions(type: 'contact' | 'registration' | 'membership' | 'chatbot'): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/submissions/${type}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
      },
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Get submissions error:', result);
      throw new Error(result.error || 'Failed to fetch submissions');
    }

    return result;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
}
