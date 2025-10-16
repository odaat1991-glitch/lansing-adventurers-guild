import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to the index.html file
        file_path = os.path.abspath('index.html')

        # Navigate to the local file
        page.goto(f'file://{file_path}#signup')

        # Verify the form is visible
        form = page.locator("#booking-form")
        expect(form).to_be_visible()

        # Take a screenshot of the form
        form.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()