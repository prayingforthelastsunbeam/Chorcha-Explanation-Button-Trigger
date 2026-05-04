# Chorcha Button Trigger

A minimal Chrome extension that automatically clicks buttons on a page whose labels contain `AI ব্যাখ্যা` or `ব্যাখ্যা`.

## Description

This extension scans the current page for all `<button>` elements and triggers those whose visible text includes either `AI ব্যাখ্যা` or `ব্যাখ্যা`. It is designed to simplify clicking explanation buttons on pages with mixed English and Bengali button labels.

## Installation

1. Open `chrome://extensions/` in Chrome.
2. Enable `Developer mode`.
3. Click `Load unpacked`.
4. Select this extension folder: `c:\Users\hiran\OneDrive\Documents\GitHub\chorcha_button_trigger`.

## Usage

- Open a page containing buttons labeled `AI ব্যাখ্যা` or `ব্যাখ্যা`.
- Click the extension icon in the toolbar.
- The extension will attempt to click all matching buttons on the page.

## Files

- `manifest.json` - Chrome extension manifest.
- `background.js` - Handles toolbar clicks and injects the content script.
- `content.js` - Finds matching buttons and clicks them.

## Notes

- This extension uses `manifest_version: 3`.
- It works on any page where the target text appears inside a button.
