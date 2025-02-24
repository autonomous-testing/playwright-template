import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

const baseUrl = process.env.WOPEE_PROJECT_URL || "https://dronjo.wopee.io";
let wopee: Wopee = new Wopee();

test("Home Page", async ({ page }, testInfo) => {
  await wopee.startSuite(`Minimal Example ${new Date().toLocaleString()}`);
  await wopee.startScenario(test.info().title, testInfo);

  await page.goto(baseUrl);
  await wopee.trackFullPage({ stepName: "Check Home Page", page });
  await wopee.stopScenario();
});
