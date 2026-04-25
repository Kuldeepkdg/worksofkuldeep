# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Application

```bash
python app.py
```

Starts the Flask dev server at `http://localhost:8000` with debug mode enabled.

## Tech Stack

- **Backend:** Python + Flask
- **Templating:** Jinja2 with template inheritance (`base.html` as parent)
- **Frontend:** Bootstrap 4, Font Awesome, jQuery
- **Configured but unused:** Flask-Login, Flask-Bcrypt, Flask-WTF, SQLAlchemy

## Architecture

All routes are in [app.py](app.py) — each simply renders a template with no business logic. Templates live in [templates/](templates/), static assets (CSS, images, PDFs) in [static/](static/).

Template inheritance: every page extends `base.html` which provides the nav, layout grid, and CDN script/style includes. Page-specific styles are written as `<style>` blocks inside individual templates.

## Known Issues in app.py

- Flask app is initialized twice (lines 13–14) — the second `app = Flask(__name__)` overwrites the first
- Authentication imports (`LoginManager`, `Bcrypt`, WTForms validators) are present but not wired up anywhere
- `Project_3` route references `Project_3.html` which does not exist in templates/
