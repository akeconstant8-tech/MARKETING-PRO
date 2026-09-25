import { describe, expect, it } from 'vitest'
import { authErrorMessage } from './authErrors'

describe('authErrorMessage', () => {
  it("traduit un code connu sans jamais afficher le texte brut de Firebase", () => {
    const err = Object.assign(new Error('Firebase: Error (auth/invalid-credential).'), {
      code: 'auth/invalid-credential',
    })
    const message = authErrorMessage(err, 'Connexion impossible.')
    expect(message).toBe('E-mail ou mot de passe incorrect.')
    expect(message).not.toMatch(/firebase|auth\//i)
  })

  it('ne distingue pas compte inexistant et mot de passe erroné', () => {
    const notFound = authErrorMessage({ code: 'auth/user-not-found' }, 'x')
    const wrongPassword = authErrorMessage({ code: 'auth/wrong-password' }, 'x')
    expect(notFound).toBe(wrongPassword)
  })

  it('retombe sur le message générique pour un code inconnu ou une erreur quelconque', () => {
    expect(authErrorMessage({ code: 'auth/quelque-chose-de-nouveau' }, 'Inscription impossible.')).toBe(
      'Inscription impossible.'
    )
    expect(authErrorMessage(new Error('détail technique interne'), 'Connexion impossible.')).toBe(
      'Connexion impossible.'
    )
    expect(authErrorMessage('chaîne', 'Envoi impossible.')).toBe('Envoi impossible.')
    expect(authErrorMessage(null, 'Envoi impossible.')).toBe('Envoi impossible.')
  })
})
