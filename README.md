# DD Security Solutions

DD Security Solutions is a browser-based online safety project created for a university group assignment. The project brings together several small security-focused tools, including password checking, password generation, a phishing checker and a Vernam/XOR cipher demonstration.

## Why we built it

The aim of the assignment was to build an interactive website around online safety and cybersecurity concepts. As a group, we combined different tools into one site so users could experiment with ideas such as password strength, phishing indicators and simple encryption.

## My contribution

This was a six-person team project.

I helped with some of the debugging and password-tool work, but my main responsibility was the Vernam cipher feature. I implemented the cipher logic and built the HTML interface around it so a user could enter a message and key, then encrypt or decrypt the result.

I also spent a lot of time on the HTML and presentation of that section. The encryption logic itself was relatively straightforward, but getting the interface to fit with the rest of the site and making the layout work the way I wanted took considerably more time.

## Main functionality

- Checks password strength using length and character-type rules
- Generates passwords with selectable character types and length
- Uses simple rules to flag possible phishing messages
- Demonstrates XOR-based encryption and decryption using a same-length key
- Provides the tools through a single browser-based interface

## Technologies

- HTML
- JavaScript
- Tailwind CSS

## What I learned

This project gave me practical experience with the technologies I was implementing rather than only learning them in isolation. In particular, I became more comfortable with:

- structuring an interactive page with HTML
- connecting HTML elements to JavaScript
- debugging front-end behaviour
- working with user input and DOM elements
- implementing XOR-based encryption logic
- combining my work with code produced by other members of a team

## How to run it

No build step is required. From the project folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

The page uses Tailwind CSS through a browser CDN, so an internet connection is needed for the styling to load correctly.

## Current limitations

This is a university project rather than a production security tool.

Some of the security features are deliberately simple. For example, the phishing checker uses rule-based indicators rather than reliably determining whether a message is malicious, and the password generator currently uses `Math.random()`.

The original password-generator code also falls back to the full character set if every character-type option is deselected. This is something I would improve if I continued developing the project.

## Possible next steps

- Improve the password-generator validation
- Use a cryptographically secure random source for password generation
- Improve the phishing-checking rules
- Improve mobile responsiveness and accessibility
- Add automated browser tests
