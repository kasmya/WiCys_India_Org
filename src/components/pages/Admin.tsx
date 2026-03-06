import { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { getSubmissions } from '../../utils/api';

export function Admin() {
  const [activeTab, setActiveTab] = useState<'contact' | 'registration' | 'membership' | 'chatbot'>('contact');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, [activeTab]);

  const loadSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getSubmissions(activeTab);
      setSubmissions(result.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { key: 'contact' as const, label: 'Contact Forms', color: 'bg-blue-500' },
    { key: 'registration' as const, label: 'Event Registrations', color: 'bg-green-500' },
    { key: 'membership' as const, label: 'Membership Applications', color: 'bg-purple-500' },
    { key: 'chatbot' as const, label: 'Chatbot Messages', color: 'bg-orange-500' },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-secondary min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">Admin Dashboard</h1>
            <p className="text-gray-600">View all submissions and user interactions</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                variant={activeTab === tab.key ? 'default' : 'outline'}
                className={activeTab === tab.key ? tab.color : ''}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Content */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-gray-900">
                  {tabs.find(t => t.key === activeTab)?.label}
                </h2>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">
                    Total: {submissions.length}
                  </Badge>
                  <Button onClick={loadSubmissions} variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>
              </div>

              {loading && (
                <div className="text-center py-12 text-gray-600">
                  Loading submissions...
                </div>
              )}

              {error && (
                <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
                  {error}
                </div>
              )}

              {!loading && !error && submissions.length === 0 && (
                <div className="text-center py-12 text-gray-600">
                  No submissions yet
                </div>
              )}

              {!loading && !error && submissions.length > 0 && (
                <div className="space-y-4">
                  {submissions.map((submission, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        {activeTab === 'contact' && (
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                                <p className="text-sm text-gray-600">{submission.email}</p>
                              </div>
                              <Badge variant="outline">{submission.status}</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Subject:</strong> {submission.subject}
                            </p>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Message:</strong> {submission.message}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(submission.timestamp).toLocaleString()}
                            </p>
                          </div>
                        )}

                        {activeTab === 'registration' && (
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                                <p className="text-sm text-gray-600">{submission.email}</p>
                              </div>
                              <Badge variant="outline">{submission.status}</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong>Event:</strong> {submission.eventTitle}
                            </p>
                            {submission.phone && (
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Phone:</strong> {submission.phone}
                              </p>
                            )}
                            <p className="text-xs text-gray-500">
                              {new Date(submission.timestamp).toLocaleString()}
                            </p>
                          </div>
                        )}

                        {activeTab === 'membership' && (
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                                <p className="text-sm text-gray-600">{submission.email}</p>
                              </div>
                              <Badge variant="outline">{submission.status}</Badge>
                            </div>
                            {submission.organization && (
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Organization:</strong> {submission.organization}
                              </p>
                            )}
                            {submission.role && (
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Role:</strong> {submission.role}
                              </p>
                            )}
                            <p className="text-xs text-gray-500">
                              {new Date(submission.timestamp).toLocaleString()}
                            </p>
                          </div>
                        )}

                        {activeTab === 'chatbot' && (
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant={submission.sender === 'user' ? 'default' : 'outline'}>
                                {submission.sender}
                              </Badge>
                              <Badge variant="outline">{submission.language}</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{submission.message}</p>
                            <p className="text-xs text-gray-500">
                              Session: {submission.sessionId} • {new Date(submission.timestamp).toLocaleString()}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
