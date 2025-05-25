'use client';

import { Button } from '@/components/ui/Button';
import { LoginForm } from '@/components/auth/LoginForm';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { SurveyForm } from '@/components/survey/SurveyForm';
import { useState } from 'react';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [showSurvey, setShowSurvey] = useState(false);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-8">
          UniPod
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Ein Prototyp für Marktforschungszwecke
        </p>
        <Link href="/podcasts">
          <Button variant="primary" className="text-lg px-8 py-3">
            Zu den Podcasts
          </Button>
        </Link>
        <div className="mt-6">
          <Button variant="secondary" className="text-lg px-8 py-3" onClick={() => setShowSurvey(true)}>
            Umfrage starten
          </Button>
        </div>
        {showSurvey && (
          <div className="mt-8 max-w-xl mx-auto">
            <SurveyForm courseId="startseite" courseTitle="Startseite" />
            <Button variant="outline" className="mt-4" onClick={() => setShowSurvey(false)}>
              Umfrage schließen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 