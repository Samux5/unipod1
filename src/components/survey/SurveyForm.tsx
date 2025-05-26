'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface SurveyFormProps {
  courseId: string;
  courseTitle: string;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ courseId, courseTitle }) => {
  const [formData, setFormData] = useState({
    age: '',
    isStudent: '',
    university: '',
    usedPlatforms: '',
    hadPaidSubscription: '',
    subscriptionAmount: '',
    examPreparationDevice: '',
    podcastExamPrepPossible: '',
    podcastExamPrepWhyNot: '',
    podcastHelpful: '',
    podcastHelpfulWhyNot: '',
    voicesFeedback: '',
    voicesFeedbackWhyNot: '',
    onlyMaleOrFemaleVoices: '',
    whyNotVoices: '',
    genderImportance: '5',
    podcastExamPrep: '5',
    paidSubscriptionPossible: '5',
    willingToPay: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const templateParams = {
        to_email: 'IHRE_EMAIL@example.com',
        course_id: courseId,
        course_title: courseTitle,
        age: formData.age,
        is_student: formData.isStudent,
        university: formData.university,
        used_platforms: formData.usedPlatforms,
        had_paid_subscription: formData.hadPaidSubscription,
        subscription_amount: formData.subscriptionAmount,
        exam_preparation_device: formData.examPreparationDevice,
        podcast_exam_prep_possible: formData.podcastExamPrepPossible,
        podcast_exam_prep_why_not: formData.podcastExamPrepWhyNot,
        podcast_helpful: formData.podcastHelpful,
        podcast_helpful_why_not: formData.podcastHelpfulWhyNot,
        voices_feedback: formData.voicesFeedback,
        voices_feedback_why_not: formData.voicesFeedbackWhyNot,
        only_male_or_female_voices: formData.onlyMaleOrFemaleVoices,
        why_not_voices: formData.whyNotVoices,
        gender_importance: formData.genderImportance,
        podcast_exam_prep: formData.podcastExamPrep,
        paid_subscription_possible: formData.paidSubscriptionPossible,
        willing_to_pay: formData.willingToPay,
        user_email: formData.email
      };
      await emailjs.send(
        'service_spfyr0e',
        'template_b444ein',
        templateParams,
        'ij-TYN2dpbmyU6nHR'
      );
      setSubmitStatus('success');
      setFormData({
        age: '',
        isStudent: '',
        university: '',
        usedPlatforms: '',
        hadPaidSubscription: '',
        subscriptionAmount: '',
        examPreparationDevice: '',
        podcastExamPrepPossible: '',
        podcastExamPrepWhyNot: '',
        podcastHelpful: '',
        podcastHelpfulWhyNot: '',
        voicesFeedback: '',
        voicesFeedbackWhyNot: '',
        onlyMaleOrFemaleVoices: '',
        whyNotVoices: '',
        genderImportance: '5',
        podcastExamPrep: '5',
        paidSubscriptionPossible: '5',
        willingToPay: '',
        email: ''
      });
    } catch (error) {
      console.error('Fehler beim Senden der Umfrage:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mt-8 p-6 max-w-2xl mx-auto shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Umfrage</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* NEU: Wie alt bist du? */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Wie alt bist du?
          </label>
          <select value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
            <option value="">Bitte wählen</option>
            {[...Array(99)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        {/* NEU: Studierst du derzeit an einer Hochschule? */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Studierst du derzeit an einer Hochschule?
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="isStudent" value="ja" checked={formData.isStudent === 'ja'} onChange={e => setFormData({ ...formData, isStudent: e.target.value, university: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="isStudent" value="nein" checked={formData.isStudent === 'nein'} onChange={e => setFormData({ ...formData, isStudent: e.target.value, university: '' })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {/* NEU: Folgefrage Universität */}
        {formData.isStudent === 'ja' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              An welcher Universität studierst du?
            </label>
            <input type="text" value={formData.university} onChange={e => setFormData({ ...formData, university: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Name der Universität" required />
          </div>
        )}
        {/* 1. Online-Lernplattformen genutzt? */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Hast du bereits Online-Lernplattformen genutzt? (Studydrive, Studocu, ...)
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="usedPlatforms" value="ja" checked={formData.usedPlatforms === 'ja'} onChange={e => setFormData({ ...formData, usedPlatforms: e.target.value, hadPaidSubscription: '', subscriptionAmount: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="usedPlatforms" value="nein" checked={formData.usedPlatforms === 'nein'} onChange={e => setFormData({ ...formData, usedPlatforms: e.target.value, hadPaidSubscription: '', subscriptionAmount: '' })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {/* 2. Nur falls Ja */}
        {formData.usedPlatforms === 'ja' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Hattest du dort ein kostenpflichtiges Abo?
            </label>
            <div className="space-x-6">
              <label className="inline-flex items-center">
                <input type="radio" name="hadPaidSubscription" value="ja" checked={formData.hadPaidSubscription === 'ja'} onChange={e => setFormData({ ...formData, hadPaidSubscription: e.target.value, subscriptionAmount: '' })} className="form-radio text-primary" required />
                <span className="ml-2">Ja</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="hadPaidSubscription" value="nein" checked={formData.hadPaidSubscription === 'nein'} onChange={e => setFormData({ ...formData, hadPaidSubscription: e.target.value, subscriptionAmount: '' })} className="form-radio text-primary" />
                <span className="ml-2">Nein</span>
              </label>
            </div>
          </div>
        )}
        {/* 3. Nur falls Ja */}
        {formData.usedPlatforms === 'ja' && formData.hadPaidSubscription === 'ja' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Wieviel hast du monatlich für das Abo gezahlt?
            </label>
            <select value={formData.subscriptionAmount} onChange={e => setFormData({ ...formData, subscriptionAmount: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
              <option value="">Bitte wählen</option>
              <option value="<10€">Weniger als 10€</option>
              <option value="10-15€">10-15€</option>
              <option value=">15€">Mehr als 15€</option>
            </select>
          </div>
        )}
        {/* 4. Neue Frage: Computer/Handy zur Prüfungsvorbereitung? */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Bereitest du dich mit deinem Computer oder Handy auf Prüfungen vor?
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="examPreparationDevice" value="ja" checked={formData.examPreparationDevice === 'ja'} onChange={e => setFormData({ ...formData, examPreparationDevice: e.target.value, podcastExamPrepPossible: '', podcastExamPrepWhyNot: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="examPreparationDevice" value="nein" checked={formData.examPreparationDevice === 'nein'} onChange={e => setFormData({ ...formData, examPreparationDevice: e.target.value, podcastExamPrepPossible: '', podcastExamPrepWhyNot: '' })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {/* 4b. Folgefrage: Podcasts zur Prüfungsvorbereitung? */}
        {formData.examPreparationDevice === 'ja' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Könntest du dir vorstellen, dich mit Podcasts auf eine Prüfung vorzubereiten?
            </label>
            <div className="space-x-6">
              <label className="inline-flex items-center">
                <input type="radio" name="podcastExamPrepPossible" value="ja" checked={formData.podcastExamPrepPossible === 'ja'} onChange={e => setFormData({ ...formData, podcastExamPrepPossible: e.target.value, podcastExamPrepWhyNot: '' })} className="form-radio text-primary" required />
                <span className="ml-2">Ja</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="podcastExamPrepPossible" value="nein" checked={formData.podcastExamPrepPossible === 'nein'} onChange={e => setFormData({ ...formData, podcastExamPrepPossible: e.target.value })} className="form-radio text-primary" />
                <span className="ml-2">Nein</span>
              </label>
            </div>
          </div>
        )}
        {/* 4c. Folgefrage: Warum nicht? */}
        {formData.examPreparationDevice === 'ja' && formData.podcastExamPrepPossible === 'nein' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Warum nicht?
            </label>
            <textarea value={formData.podcastExamPrepWhyNot} onChange={e => setFormData({ ...formData, podcastExamPrepWhyNot: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" rows={2} placeholder="Deine Antwort ..." required />
          </div>
        )}
        {/* 7. Denk an dein letztes Prüfungsfach: Ja/Nein, Folgefrage bei Nein */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Denk an dein letztes großes Prüfungsfach: Wäre ein kursspezifischer Lernpodcast für dich hilfreich gewesen?
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="podcastHelpful" value="ja" checked={formData.podcastHelpful === 'ja'} onChange={e => setFormData({ ...formData, podcastHelpful: e.target.value, podcastHelpfulWhyNot: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="podcastHelpful" value="nein" checked={formData.podcastHelpful === 'nein'} onChange={e => setFormData({ ...formData, podcastHelpful: e.target.value })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {formData.podcastHelpful === 'nein' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Warum nicht?
            </label>
            <textarea value={formData.podcastHelpfulWhyNot} onChange={e => setFormData({ ...formData, podcastHelpfulWhyNot: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" rows={2} placeholder="Deine Antwort ..." required />
          </div>
        )}
        {/* 8. Stimmen: Ja/Nein, Folgefrage bei Nein */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Gefallen dir die beiden Stimmen (Thomas und Lisa)?
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="voicesFeedback" value="ja" checked={formData.voicesFeedback === 'ja'} onChange={e => setFormData({ ...formData, voicesFeedback: e.target.value, voicesFeedbackWhyNot: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="voicesFeedback" value="nein" checked={formData.voicesFeedback === 'nein'} onChange={e => setFormData({ ...formData, voicesFeedback: e.target.value })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {formData.voicesFeedback === 'nein' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Warum nicht?
            </label>
            <textarea value={formData.voicesFeedbackWhyNot} onChange={e => setFormData({ ...formData, voicesFeedbackWhyNot: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" rows={2} placeholder="Deine Antwort ..." required />
          </div>
        )}
        {/* 9. Ja/Nein */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Wäre es für dich okay, wenn beides Männer- oder Frauenstimmen wären?
          </label>
          <div className="space-x-6">
            <label className="inline-flex items-center">
              <input type="radio" name="onlyMaleOrFemaleVoices" value="ja" checked={formData.onlyMaleOrFemaleVoices === 'ja'} onChange={e => setFormData({ ...formData, onlyMaleOrFemaleVoices: e.target.value, whyNotVoices: '' })} className="form-radio text-primary" required />
              <span className="ml-2">Ja</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="onlyMaleOrFemaleVoices" value="nein" checked={formData.onlyMaleOrFemaleVoices === 'nein'} onChange={e => setFormData({ ...formData, onlyMaleOrFemaleVoices: e.target.value })} className="form-radio text-primary" />
              <span className="ml-2">Nein</span>
            </label>
          </div>
        </div>
        {/* 10. Nur falls Nein */}
        {formData.onlyMaleOrFemaleVoices === 'nein' && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Warum nicht?
            </label>
            <textarea value={formData.whyNotVoices} onChange={e => setFormData({ ...formData, whyNotVoices: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" rows={2} placeholder="Deine Antwort ..." required />
          </div>
        )}
        {/* 11. Skala 1-10 */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Wie wichtig findest du Gendern in den Podcasts? <span className="text-gray-500 text-sm">(1 = Überhaupt nicht wichtig, 10 = Sehr wichtig)</span>
          </label>
          <select value={formData.genderImportance} onChange={e => setFormData({ ...formData, genderImportance: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        {/* 12. Skala 1-10 */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Könntest du dir vorstellen, dich mit Podcasts auf Prüfungen vorzubereiten? <span className="text-gray-500 text-sm">(1 = Kann ich mir gar nicht vorstellen, 10 = Kann ich mir sehr gut vorstellen)</span>
          </label>
          <select value={formData.podcastExamPrep} onChange={e => setFormData({ ...formData, podcastExamPrep: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        {/* 13. Skala 1-10 */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Kannst du dir vorstellen ein kostenpflichtiges Abo abzuschließen um Zugriff auf alle Podcasts zu allen Vorlesungen deiner Uni zu bekommen? <span className="text-gray-500 text-sm">(1 = Kann ich mir gar nicht vorstellen, 10 = Kann ich mir sehr gut vorstellen)</span>
          </label>
          <select value={formData.paidSubscriptionPossible} onChange={e => setFormData({ ...formData, paidSubscriptionPossible: e.target.value, willingToPay: '' })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        {/* 14. Folgefrage */}
        {parseInt(formData.paidSubscriptionPossible) > 1 && (
          <div>
            <label className="block text-base font-medium text-gray-800 mb-2">
              Wieviel wärst du bereit für ein kostenpflichtiges Abo zu zahlen?
            </label>
            <select value={formData.willingToPay} onChange={e => setFormData({ ...formData, willingToPay: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" required>
              <option value="">Bitte wählen</option>
              <option value="0-5€">0-5€</option>
              <option value="5-15€">5-15€</option>
              <option value=">15€">mehr als 15€</option>
            </select>
          </div>
        )}
        {/* Kontaktfeld */}
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Deine E-Mail (optional)
          </label>
          <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="email@example.com" />
        </div>
        {submitStatus === 'success' && (
          <div className="p-2 bg-green-50 text-green-700 rounded-md text-sm text-center">
            Vielen Dank für dein Feedback!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-2 bg-red-50 text-red-700 rounded-md text-sm text-center">
            Es gab einen Fehler beim Senden der Umfrage. Bitte versuche es später erneut.
          </div>
        )}
        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Wird gesendet...' : 'Umfrage absenden'}
        </Button>
      </form>
    </Card>
  );
}; 