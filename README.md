# Qadam-
virtual career asisstant


# Qadam – Virtual Career Assistant

Live Site: [https://ardak5.github.io/Qadam-/](https://ardak5.github.io/Qadam-/)

## Overview

Qadam is a modern web-based career guidance platform that helps users explore suitable professions based on their personality traits and strengths. The system integrates psychological models — **Gallup CliftonStrengths** and **MBTI (16Personalities)** — and uses the **OpenAI GPT-4 API** to generate personalized career suggestions.

---

## Features

- Chat-based career recommendations powered by GPT-4
- Personality test selectors: Gallup Top 10 and MBTI types
- PDF upload support for automatic strength extraction (Gallup)
- Dashboard with sidebar navigation and profile view
- Library of resources: books, articles, webinars, videos
- Clean and animated UI with login/sign-up page
- LocalStorage-based user data handling

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- API: OpenAI ChatGPT API (GPT-4o)
- Storage: LocalStorage (no database)
- PDF Parser: PDF.js for Gallup strength recognition

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/username/project-name.git
```

2. Install dependencies:
```bash
npm install
```

3. Add your OpenAI API key to a `.env` file:
```
OPENAI_API_KEY=your_api_key_here
```

---

## Usage

Start the backend server:
```bash
npm start
```

Then open your browser and visit:
```
http://localhost:3000
```

Users can:
- Upload their Gallup report or select their top 10 strengths manually
- Choose their MBTI personality type
- Get tailored profession recommendations
- Browse helpful learning resources

---

## Project Structure

```
├── server.js               # Express backend using OpenAI API
├── package.json            # Node.js dependencies
├── /public
│   ├── index.html          # Landing page
│   ├── profile.html        # User dashboard with sidebar
│   ├── strengths.html      # Gallup strengths selector
│   ├── 16p.html            # MBTI personality type selector
│   ├── ref.html            # Login and sign-up page
│   ├── library.html        # Scrolling educational library
│   ├── top10.html          # Final recommendation page
│   └── api.html            # UI for OpenAI API interaction
```

---

## Configuration

- Get your OpenAI API Key from:  
  [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

- Customize parameters like temperature, max_tokens, and model version in `server.js`.

---

## License

This project is licensed under the MIT License.
