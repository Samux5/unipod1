'use client';

import { Card } from '@/components/ui/Card';
import { useAuth } from '@/context/AuthContext';
import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

const courses = [
  {
    id: 'bwl',
    title: 'Betriebswirtschaft und Digitale Ökonomie',
  },
  {
    id: 'vwl',
    title: 'Volkswirtschaftslehre und Zukunftsfähiges Wirtschaften',
  },
  {
    id: 'rechtswissenschaft',
    title: 'Einführung in die Rechtswissenschaften',
  },
  {
    id: 'europarecht',
    title: 'Europäisches und öffentliches Wirtschaftsrecht',
  },
];

export default function PodcastsPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Wählen Sie einen Kurs
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {courses.map((course) => (
            <Link 
              key={course.id}
              href={`/podcasts/${course.id}`}
              className="block hover:transform hover:scale-105 transition-transform duration-200"
            >
              <Card className="h-full flex items-center justify-center p-8">
                <h2 className="text-xl font-semibold text-gray-900 text-center">
                  {course.title}
                </h2>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 