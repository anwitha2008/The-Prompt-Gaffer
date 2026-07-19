import pytest

try:
    from playwright.sync_api import Page, expect
    playwright_available = True
except ImportError:
    playwright_available = False
    class Page: pass
    expect = None

# Skip E2E tests automatically if Playwright framework is not installed on target machine
pytestmark = pytest.mark.skipif(
    not playwright_available,
    reason="Playwright dependencies not installed on this environment."
)

def test_homepage_title(page: Page):
    """
    End-to-End test validating that the landing page loads with the correct document title.
    """
    page.goto("http://localhost:8000")
    
    # Assert header title matches the brand
    expect(page).to_have_title("AegisArena FIFA 2026 - GenAI Stadium Control & Fan Assistant")

def test_portal_navigation(page: Page):
    """
    End-to-End test simulating a director switching from Staff command to Waste Operations.
    Verifies container visibility changes accurately in the viewport.
    """
    page.goto("http://localhost:8000")
    
    # Check that Staff Operations is visible and Waste is hidden at start
    expect(page.locator("#staff-portal")).to_be_visible()
    expect(page.locator("#waste-portal")).not_to_be_visible()
    
    # Switch portal view to Waste and Logistics
    page.click("#toggle-waste-btn")
    
    # Verify layout update
    expect(page.locator("#staff-portal")).not_to_be_visible()
    expect(page.locator("#waste-portal")).to_be_visible()

def test_fan_companion_tab_switch(page: Page):
    """
    End-to-End test simulating a fan switching between companion chatbot and wayfinder tabs.
    """
    page.goto("http://localhost:8000")
    
    # Switch to Fan Companion phone frame
    page.click("#toggle-fan-btn")
    expect(page.locator("#fan-portal")).to_be_visible()
    
    # Default tab is AI Buddy chat
    expect(page.locator("#fan-tab-buddy")).to_be_visible()
    expect(page.locator("#fan-tab-wayfinder")).not_to_be_visible()
    
    # Navigate to Wayfinder router tab
    page.click("#btn-tab-wayfinder")
    
    # Verify active tab changes
    expect(page.locator("#fan-tab-buddy")).not_to_be_visible()
    expect(page.locator("#fan-tab-wayfinder")).to_be_visible()
