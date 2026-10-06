# Online Safety Awareness Website

This is a browser-based online safety awareness project created as part of a six-person team. The supplied project files include an educational single-page website, a password generator and a phishing-link checker.

## Features

- Online safety guidance presented in a single-page website
- Password generator with selectable character types
- Validation that prevents unrestricted password generation when no character-type option is selected
- Phishing-link checker based on suspicious URL patterns
- Responsive front-end layout

## Technologies

- HTML5
- CSS3
- JavaScript
- Web Crypto API

## Screenshots

No generated or mock screenshot is included. Run the website locally to view the current interface.

## Getting Started

No build step is required. From the repository directory, start a simple local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Testing

No automated test suite is included. During portfolio preparation, the password-generator validation was checked and repaired so that a password is not generated when no character-type option is selected.

## Team Project / My Contribution

This was a six-person team project. The repository contains the team's final website files. My verified contribution represented here includes debugging the password-generator validation so that the generator does not produce an unrestricted password when no character-type option is selected.

The other features listed above describe functionality present in the team project as a whole and should not be read as claims that I personally implemented every component.

## Further Improvements

Potential future improvements include stronger accessibility testing, automated browser tests, clearer separation of JavaScript modules and more comprehensive phishing-link analysis. These are not current features.
