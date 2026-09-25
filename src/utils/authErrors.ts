// Messages d'erreur d'authentification destinés à l'utilisateur final.
//
// Firebase renvoie des erreurs du type « Firebase: Error (auth/invalid-credential). » :
// texte anglais, codes internes, détails techniques. On n'affiche jamais ce texte brut :
// chaque code connu est traduit en message clair, et tout code inconnu retombe sur
// le message générique fourni par l'appelant. Les cas « compte inexistant » et « mot
// de passe erroné » partagent volontairement le même message, pour ne pas révéler si
// une adresse e-mail possède un compte.

const MESSAGES: Record<string, string> = {
  'auth/invalid-credential': 'E-mail ou mot de passe incorrect.',
  'auth/wrong-password': 'E-mail ou mot de passe incorrect.',
  'auth/user-not-found': 'E-mail ou mot de passe incorrect.',
  'auth/invalid-email': 'Adresse e-mail invalide.',
  'auth/missing-password': 'Veuillez saisir votre mot de passe.',
  'auth/email-already-in-use': 'Cette adresse e-mail est déjà utilisée.',
  'auth/weak-password': 'Mot de passe trop faible (6 caractères minimum).',
  'auth/too-many-requests': 'Trop de tentatives. Réessayez dans quelques minutes.',
  'auth/network-request-failed': 'Connexion réseau indisponible. Vérifiez votre connexion internet.',
  'auth/user-disabled': 'Ce compte est désactivé.',
  'auth/popup-closed-by-user': 'Connexion Google annulée.',
  'auth/cancelled-popup-request': 'Connexion Google annulée.',
  'auth/popup-blocked': 'La fenêtre de connexion Google a été bloquée par le navigateur.',
}

function errorCode(err: unknown): string | null {
  if (typeof err !== 'object' || err === null || !('code' in err)) return null
  const code = (err as { code: unknown }).code
  return typeof code === 'string' ? code : null
}

/** Message sûr à afficher pour `err` ; `fallback` si l'erreur n'est pas reconnue. */
export function authErrorMessage(err: unknown, fallback: string): string {
  const code = errorCode(err)
  return (code && MESSAGES[code]) || fallback
}
