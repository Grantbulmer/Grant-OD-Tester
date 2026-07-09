# Grant OS Tester Build 3.0 - First Launch Onboarding

Tester-only build based on the current main build.

Changes in this tester build only:
- Personal default app data has been removed from the starting dataset.
- Tester data uses separate localStorage keys so it does not load the main-build saved data from the same GitHub Pages origin.
- Added a one-time first-launch onboarding message with 5 slides: Accounts, Budget Setup, Debt Tracker, Holiday Pots and Grant OS Helper.
- The onboarding message uses a stable localStorage key and appears once only on first launch.

No layout, calculations, dropdowns, totals, graphs or existing app functions were intentionally changed.

Chrome test link:
https://grantbulmer.github.io/Grant-OS/?v=tester-build-3-0-first-launch-onboarding
