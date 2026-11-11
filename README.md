# NANNIN GROUP — Site vitrine React

Site vitrine responsive inspiré de la maquette fournie, réalisé avec React JS, Vite et CSS personnalisé (JSX, sans TypeScript).

## Lancer le projet

1. Installer Node.js (version LTS recommandée).
2. Ouvrir le dossier dans VS Code / Cursor.
3. Dans le terminal :

```bash
npm install
npm run dev
```

4. Ouvrir l’adresse locale affichée par Vite, généralement `http://localhost:5173`.

## Production

```bash
npm run build
npm run preview
```

Le dossier de production est `dist/`.

## Personnalisation

- Les départements et les textes se trouvent dans `src/data.js`.
- Les couleurs, espacements et responsive se trouvent dans `src/styles.css`.
- Les images utilisent des URLs Unsplash distantes : une connexion internet est nécessaire pour les afficher.
- Le formulaire de contact ouvre le logiciel de messagerie via `mailto:`. Pour un envoi automatique depuis le site, connecter un backend ou un service email (Resend, EmailJS, etc.).
- Contacts actuels : bureau **+229 96 59 18 18** · WhatsApp **+229 96 89 57 80** · `contact@nanningroup.com` (général) · `mobility@nanningroup.com` (mobilité internationale). Ils sont définis dans `src/App.jsx` (topbar, section contact, pied de page).
- Les partenaires de la maquette sont des éléments de présentation, pas une confirmation de partenariat officiel.
