'use client';

import { useAuth } from '@/context/AuthContext';
import { LoginForm } from '@/components/auth/LoginForm';
import { useState } from 'react';
import { AudioPlayer } from '@/components/audio/AudioPlayer';
import { SurveyForm } from '@/components/survey/SurveyForm';

const modules = [
  {
    id: 'modul1',
    title: 'Modul 1',
    podcasts: [
      {
        id: 'podcast1',
        title: 'Einführung in das Europäische und öffentliche Wirtschaftsrecht',
        duration: '45:00',
        audioSrc: '/podcasts/europarecht/europwire.mp3'
      }
    ]
  }
];

export default function EuroparechtPage() {
  const { isAuthenticated } = useAuth();
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [error, setError] = useState<string>('');

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Europäisches und öffentliches Wirtschaftsrecht
        </h1>

        <div className="mb-8">
          <label htmlFor="module-select" className="block text-sm font-medium text-gray-700 mb-2">
            Wählen Sie ein Modul
          </label>
          <select
            id="module-select"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            value={selectedModule}
            onChange={(e) => handleModuleSelect(e.target.value)}
          >
            <option value="">Bitte wählen</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.title}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {selectedModule && (
          <div className="space-y-4">
            {modules
              .find(m => m.id === selectedModule)
              ?.podcasts.map((podcast) => (
                <div key={podcast.id}>
                  <AudioPlayer
                    title={podcast.title}
                    src={podcast.audioSrc}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Hinweis: Bitte stellen Sie sicher, dass die Datei {podcast.audioSrc} im public-Verzeichnis existiert.
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
      <SurveyForm 
        courseId="europarecht"
        courseTitle="Europäisches und öffentliches Wirtschaftsrecht"
      />
    </div>
  );
} 