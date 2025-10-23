import { test, expect } from '@playwright/test';
import { testInstrumentation } from './instrumentation-helper';

test.describe('Escape Room Builder – smoke', () => {
  test('opens builder, edits fields, adds a stage, previews game', async ({ page }) => {
    testInstrumentation.startTest('opens builder, edits fields, adds a stage, previews game');
    // Builder route from your repo: app/main_pages/escape-room/page.tsx
    await testInstrumentation.traceAction('Navigate to escape room builder', async () => {
      await page.goto('/main_pages/escape-room');
      testInstrumentation.logPageLoad('/main_pages/escape-room');
    });

    // Room Configuration inputs (match your exact ids / labels)
    await testInstrumentation.traceAction('Fill room configuration', async () => {
      await page.locator('#room-title-input').fill('E2E Smoke Room');
      testInstrumentation.logUserAction('Fill room title', '#room-title-input');
      
      await page.locator('#timer-input').fill('1'); // 1 minute for a quick preview
      testInstrumentation.logUserAction('Set timer', '#timer-input');
      
      await page.locator('#desc-input').fill('Automated smoke test description');
      testInstrumentation.logUserAction('Fill description', '#desc-input');
    });

    // Verify fields hold values
    await testInstrumentation.traceAction('Verify form values', async () => {
      await expect(page.locator('#room-title-input')).toHaveValue('E2E Smoke Room');
      testInstrumentation.logAssertion('Room title has correct value', true);
      
      await expect(page.locator('#timer-input')).toHaveValue('1');
      testInstrumentation.logAssertion('Timer has correct value', true);
    });

    // Add Stage button (exact button text in your file)
    await testInstrumentation.traceAction('Add new stage', async () => {
      const stagesHeading = page.getByRole('heading', { name: /Puzzle Stages \(\d+\)/i });
      const beforeText = await stagesHeading.textContent();
      await page.getByRole('button', { name: /Add Stage/i }).click();
      testInstrumentation.logUserAction('Click Add Stage button');

      // The count should increment e.g., "Puzzle Stages (2)"
      await expect(stagesHeading).not.toHaveText(beforeText || '');
      testInstrumentation.logAssertion('Stage count incremented', true);
    });

    // Preview button (exact text is "Preview")
    await testInstrumentation.traceAction('Start preview', async () => {
      await page.getByRole('button', { name: /^Preview$/ }).click();
      testInstrumentation.logUserAction('Click Preview button');
    });

    // We're now inside the Player (EscapeRoomPlayer)
    await testInstrumentation.traceAction('Verify game player UI', async () => {
      // Timer block: shows "Time Remaining" and a mm:ss value
      await expect(page.getByText('Time Remaining')).toBeVisible();
      testInstrumentation.logAssertion('Timer display visible', true);
      
      // timer value should be in the format mm:ss (2 digits:2 digits)
      const timerElement = page.locator('.text-green-400').filter({ hasText: /\d{2}:\d{2}/ });
      await expect(timerElement).toBeVisible();
      const timerText = await timerElement.textContent();
      expect(timerText).toMatch(/\d{2}:\d{2}/);
      testInstrumentation.logAssertion('Timer format correct', true);

      // Stage indicator: "Stage 1 of N"
      await expect(page.getByText(/Stage\s+\d+\s+of\s+\d+/i)).toBeVisible();
      testInstrumentation.logAssertion('Stage indicator visible', true);

      // Submit button exists for non-click puzzles
      await expect(page.getByRole('button', { name: /Submit Answer/i })).toBeVisible();
      testInstrumentation.logAssertion('Submit button visible', true);
    });

    // Exit Preview to return (optional)
    await testInstrumentation.traceAction('Exit preview', async () => {
      await page.getByRole('button', { name: /Exit Preview/i }).click();
      testInstrumentation.logUserAction('Click Exit Preview button');
      await expect(page.getByRole('heading', { name: /Room Configuration/i })).toBeVisible();
      testInstrumentation.logAssertion('Returned to builder', true);
    });

    const testDuration = testInstrumentation.endTest();
    console.log(`🎯 Test completed with enhanced instrumentation in ${testDuration}ms`);
  });
});
