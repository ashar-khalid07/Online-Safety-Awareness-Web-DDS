# Online Safety Awareness Website

This is a browser-based online safety awareness project created as part of a six-person team. The supplied project files include an educational single-page website, password-strength feedback, a configurable password generator, a heuristic phishing detector and a Vernam/XOR cipher demonstration.

## Features

- Password-strength feedback based on length and character variety
- Password generator with selectable character types and length
- Validation that prevents password generation when no character-type option is selected
- Browser Web Crypto API used for password-generation randomness
- Heuristic phishing detector that scores suspicious sender/message patterns
- Vernam/XOR cipher demonstration requiring a same-length key
- Tailwind CSS browser build for the page layout

## Technologies

- HTML5
- JavaScript
- Tailwind CSS (browser CDN)
- Web Crypto API

## Screenshots

No generated or mock screenshot is included. Run the website locally to view the current interface.

## Getting Started

No build step is required. From the repository directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

An internet connection is required for the Tailwind browser CDN used by the supplied page.

## Testing

No automated test suite is included. During portfolio preparation, the password-generator behaviour was inspected and repaired so that a password is not generated when all character-type options are deselected. The generator was also changed to use `crypto.getRandomValues()` rather than `Math.random()`.

## Team Project / My Contribution

This was a six-person team project. The repository contains the team's website files. My verified contribution represented here includes debugging the password-generator validation so that the generator does not produce an unrestricted password when no character-type option is selected.

The other features listed above describe functionality present in the team project as a whole and should not be read as claims that I personally implemented every component.

## Further Improvements

Potential future improvements include stronger accessibility testing, automated browser tests, clearer JavaScript module separation, more robust URL/email parsing for phishing analysis and authenticated security tooling for real-world use. These are potential improvements, not current features.
