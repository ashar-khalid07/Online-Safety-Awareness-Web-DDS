# Online Safety Awareness Website

This is a browser-based online safety project created as part of a six-person team. The website includes password-strength feedback, a password generator, a simple phishing detector and a Vernam/XOR cipher demonstration.

## Main functionality

- Checks password strength using length and character-type rules
- Generates passwords with selectable character types and length
- Scores possible phishing messages using sender details and suspicious text patterns
- Demonstrates XOR-based encryption/decryption with a same-length key
- Uses Tailwind CSS through a browser CDN for the interface

## Technologies

- HTML
- JavaScript
- Tailwind CSS

## How to run it

No build step is required. Run a simple local server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Team project

This was a six-person university team project, so the repository contains work from the group rather than code I personally wrote in full.

## Current limitations

This repository preserves the original project code. Some parts are simplified coursework implementations rather than production security tools.

The password generator uses `Math.random()`, and if every character-type option is deselected it falls back to using the full character set. The phishing detector is heuristic and the XOR cipher is included as an educational demonstration.

## Possible next steps

- Improve the password-generator validation
- Use a cryptographically secure random source for generated passwords
- Improve accessibility
- Add automated browser tests
- Make the phishing checks more robust
