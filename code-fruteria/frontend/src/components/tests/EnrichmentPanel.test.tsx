import React from 'react';
import { render, screen } from '@testing-library/react';
import EnrichmentPanel from '../EnrichmentPanel';

jest.mock('../../data/enrichmentData', () => ({
  enrichmentData: {
    Apple: 'Apples are rich in fiber.',
  },
}));

describe('EnrichmentPanel', () => {
  it('shows enrichment data when available', () => {
    render(<EnrichmentPanel fruit="Apple" />);
    expect(screen.getByText(/apples are rich in fiber/i)).toBeInTheDocument();
  });

  it('shows fallback message when no enrichment data', () => {
    render(<EnrichmentPanel fruit="Banana" />);
    expect(screen.getByText(/no enrichment data available/i)).toBeInTheDocument();
  });
});
