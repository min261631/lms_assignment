import { test, expect } from '@playwright/test';

test.describe('Escape Room – default stage playthrough', () => {
  test('solves the default "Format Code Correctly" and wins', async ({ page }) => {
    await page.goto('/main_pages/escape-room');

    // Ensure we have at least the default stage
    await expect(page.getByRole('heading', { name: /Puzzle Stages \(\d+\)/i })).toBeVisible();

    // Start the in-app Player
    await page.getByRole('button', { name: /^Preview$/ }).click();

    // Confirm we are in Stage 1
    await expect(page.getByText(/Stage\s+1\s+of\s+\d+/i)).toBeVisible();

    // Fill the answer textarea with the exact expected formatted code
    const answer =
`function check(key) {
  return key === 'masterkey';
}`;
    // Your player uses a <Textarea> with placeholder "Type your answer here..."
    await page.getByPlaceholder('Type your answer here...').fill(answer);

    // Submit
    await page.getByRole('button', { name: /Submit Answer/i }).click();

    // If there is only this single stage, the success screen appears:
    await expect(page.getByRole('heading', { name: 'CONGRATULATIONS!' })).toBeVisible({ timeout: 10_000 });

    // Bonus: verify time used is displayed
    await expect(page.getByText('Time Used:')).toBeVisible();
    await expect(page.locator('text=Time Used:').locator('..')).toContainText(/\b\d{2}:\d{2}\b/);
  });
});
