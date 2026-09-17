import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Login from './Login';

vi.mock('../services/authService', () => ({
  signInWithEmail: vi.fn(),
  signInWithGoogle: vi.fn(),
  resetPassword: vi.fn(),
}));

function renderLogin() {
  return render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
}

describe('Login page — welcome / login toggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows the welcome copy and hides the login form on first render', () => {
    renderLogin();
    expect(screen.getByText(/Bienvenue Professeur/)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Connexion' })).not.toBeInTheDocument();
  });

  it('shows only the login form (not the welcome copy) after clicking "Connexion"', async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.click(screen.getByRole('button', { name: /connexion/i }));

    expect(await screen.findByRole('heading', { name: 'Connexion' })).toBeInTheDocument();
    expect(screen.queryByText(/Bienvenue Professeur/)).not.toBeInTheDocument();
  });

  it('returns to the welcome copy via "Retour" without showing both at once', async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.click(screen.getByRole('button', { name: /connexion/i }));
    await screen.findByRole('heading', { name: 'Connexion' });

    await user.click(screen.getByRole('button', { name: /retour/i }));

    await waitFor(() => expect(screen.getByText(/Bienvenue Professeur/)).toBeInTheDocument());
    expect(screen.queryByRole('heading', { name: 'Connexion' })).not.toBeInTheDocument();
  });

  it('toggles the password field between hidden and visible text', async () => {
    const user = userEvent.setup();
    renderLogin();
    await user.click(screen.getByRole('button', { name: /connexion/i }));
    await screen.findByRole('heading', { name: 'Connexion' });

    const passwordInput = screen.getByLabelText('Mot de passe');
    expect(passwordInput).toHaveAttribute('type', 'password');

    await user.click(screen.getByLabelText('Afficher le mot de passe'));
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('disables the submit button until both email and password are filled', async () => {
    const user = userEvent.setup();
    renderLogin();
    await user.click(screen.getByRole('button', { name: /connexion/i }));
    const form = (await screen.findByRole('heading', { name: 'Connexion' })).closest('.hero-login-card') as HTMLElement;

    const submit = within(form).getByRole('button', { name: /se connecter/i });
    expect(submit).toBeDisabled();

    await user.type(screen.getByLabelText('Adresse email'), 'prof@example.com');
    await user.type(screen.getByLabelText('Mot de passe'), 'secret123');

    expect(submit).toBeEnabled();
  });
});
