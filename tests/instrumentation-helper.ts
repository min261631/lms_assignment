// Custom instrumentation helper for Playwright tests
import { trace } from '@playwright/test';

export class TestInstrumentation {
  private static instance: TestInstrumentation;
  private testStartTime: number = 0;
  private testName: string = '';

  static getInstance(): TestInstrumentation {
    if (!TestInstrumentation.instance) {
      TestInstrumentation.instance = new TestInstrumentation();
    }
    return TestInstrumentation.instance;
  }

  startTest(testName: string) {
    this.testName = testName;
    this.testStartTime = Date.now();
    console.log(`🔍 Starting instrumentation for test: ${testName}`);
  }

  endTest() {
    const duration = Date.now() - this.testStartTime;
    console.log(`⏱️ Test completed in ${duration}ms: ${this.testName}`);
    return duration;
  }

  async traceAction(actionName: string, action: () => Promise<void>) {
    const startTime = Date.now();
    console.log(`📊 Tracing action: ${actionName}`);
    
    try {
      await action();
      const duration = Date.now() - startTime;
      console.log(`✅ Action completed: ${actionName} (${duration}ms)`);
    } catch (error) {
      const duration = Date.now() - startTime;
      console.log(`❌ Action failed: ${actionName} (${duration}ms) - ${error}`);
      throw error;
    }
  }

  logPageLoad(url: string) {
    console.log(`🌐 Page loaded: ${url}`);
  }

  logUserAction(action: string, element?: string) {
    console.log(`👆 User action: ${action}${element ? ` on ${element}` : ''}`);
  }

  logAssertion(assertion: string, result: boolean) {
    console.log(`✅ Assertion: ${assertion} - ${result ? 'PASSED' : 'FAILED'}`);
  }
}

// Export singleton instance
export const testInstrumentation = TestInstrumentation.getInstance();
