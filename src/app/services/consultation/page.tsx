import React from 'react';
import { Metadata } from 'next';
import { ConsultationClient } from './ConsultationClient';

export const metadata: Metadata = {
  title: 'Consultation | The Strategy | Talentronaut',
  description: 'Expert guidance for technical feasibility, growth hacking, and startup scaling.',
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}
