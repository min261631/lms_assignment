import { test, expect } from '@playwright/test';

test.describe('Escape Room Builder – smoke', () => {
  test('opens builder, edits fields, adds a stage, previews game', async ({ page }) => {
    // Builder route from your repo: app/main_pages/escape-room/page.tsx
    await page.goto('/main_pages/escape-room');

    // Room Configuration inputs (match your exact ids / labels)
    await page.locator('#room-title-input').fill('E2E Smoke Room');
    await page.locator('#timer-input').fill('1'); // 1 minute for a quick preview
    await page.locator('#desc-input').fill('Automated smoke test description');

    // Verify fields hold values
    await expect(page.locator('#room-title-input')).toHaveValue('E2E Smoke Room');
    await expect(page.locator('#timer-input')).toHaveValue('1');

    // Add Stage button (exact button text in your file)
    const stagesHeading = page.getByRole('heading', { name: /Puzzle Stages \(\d+\)/i });
    const beforeText = await stagesHeading.textContent();
    await page.getByRole('button', { name: /Add Stage/i }).click();

    // The count should increment e.g., "Puzzle Stages (2)"
    await expect(stagesHeading).not.toHaveText(beforeText || '');

    // Preview button (exact text is "Preview")
    await page.getByRole('button', { name: /^Preview$/ }).click();

    // We’re now inside the Player (EscapeRoomPlayer)
    // Timer block: shows "Time Remaining" and a mm:ss value
    await expect(page.getByText('Time Remaining')).toBeVisible();
    // timer value next to the clock icon should look like 2 digits:2 digits
    const timerText = await page.locator('text=Time Remaining').locator('..').locator('..').textContent();
    expect(timerText).toMatch(/\b\d{2}:\d{2}\b/);

    // Stage indicator: "Stage 1 of N"
    await expect(page.getByText(/Stage\s+\d+\s+of\s+\d+/i)).toBeVisible();

    // Submit button exists for non-click puzzles
    await expect(page.getByRole('button', { name: /Submit Answer/i })).toBeVisible();

    // Exit Preview to return (optional)
    await page.getByRole('button', { name: /Exit Preview/i }).click();
    await expect(page.getByRole('heading', { name: /Room Configuration/i })).toBeVisible();
  });
});
