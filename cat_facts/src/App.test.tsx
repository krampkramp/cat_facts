import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders appropriately', () => {
    render(
     <BrowserRouter><App/></BrowserRouter>)
    expect(screen.getByText(/Welcome to Cat Facts/i)).toBeInTheDocument()
  })
 })