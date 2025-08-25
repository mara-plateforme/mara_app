# 🎯 JOURNÉES PORTES OUVERTES - Guide d'activation/désactivation

## 📋 Composants créés

### 1. **OpenHouseBanner** - Bannière fixe en haut
- **Fichier :** `components/open-house-banner.tsx`
- **Position :** Bannière fixe en haut de toutes les pages
- **Fonctionnalités :**
  - Affichage des dates et lieux
  - Bouton de fermeture (X)
  - Responsive mobile/desktop
  - Bouton "S'inscrire"

### 2. **OpenHouseSection** - Section complète
- **Fichier :** `components/open-house-section.tsx`
- **Position :** Page d'accueil (entre Testimonials et CTA)
- **Fonctionnalités :**
  - Cartes détaillées pour chaque campus
  - Programme des activités
  - Informations de contact
  - Boutons de réservation

## 🚀 Comment ACTIVER les journées portes ouvertes

### Option 1 : Bannière seule (recommandé pour début)
Dans `app/layout.tsx` ligne 8 et 37 :
```tsx
// DÉCOMMENTEZ ces lignes :
import { OpenHouseBanner } from '@/components/open-house-banner'
<OpenHouseBanner />
```

### Option 2 : Section complète (pour promotion intensive)
Dans `app/page.tsx` ligne 8 et 21 :
```tsx
// DÉCOMMENTEZ ces lignes :
import { OpenHouseSection } from '@/components/open-house-section'
<OpenHouseSection />
```

### Option 3 : Les deux (promotion maximale)
Décommentez les deux composants dans les deux fichiers.

## 🛑 Comment DÉSACTIVER les journées portes ouvertes

### Méthode simple (recommandée)
Remettez les lignes en commentaires :
```tsx
// import { OpenHouseBanner } from '@/components/open-house-banner'
// import { OpenHouseSection } from '@/components/open-house-section'

{/* <OpenHouseBanner /> */}
{/* <OpenHouseSection /> */}
```

## ✏️ Personnalisation des dates/infos

### Modifier les événements
Dans `open-house-banner.tsx` et `open-house-section.tsx`, modifiez l'objet `events` :

```tsx
const events = [
  {
    date: '15 Mars 2025',        // ← Modifier ici
    time: '14h00 - 18h00',       // ← Modifier ici
    location: 'Campus Dakar',
    address: 'Plateau, Dakar, Sénégal'
  },
  // ...
]
```

### Modifier les contacts
Dans `open-house-section.tsx`, section `contact` :
```tsx
contact: {
  phone: '+221 77 123 45 67',    // ← Modifier ici
  email: 'dakar@mara-digital.com' // ← Modifier ici
}
```

## 🎨 Style et couleurs
- Utilise la palette dorée du site (gold-primary, gold-light)
- S'intègre parfaitement avec le design existant
- Responsive sur tous les écrans

## 🔧 Fonctionnalités techniques
- **État local** : La bannière peut être fermée par l'utilisateur
- **Animations** : Framer Motion pour les transitions
- **Responsive** : Adapté mobile/desktop
- **Accessibilité** : Boutons et liens correctement balisés

---

**💡 Conseil :** Commencez par la bannière seule, puis ajoutez la section complète si besoin d'une promotion plus intensive.
