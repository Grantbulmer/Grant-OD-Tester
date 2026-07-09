# Grant OS Tester Build 3.0 - GitHub Repo Ready

Tester-only build based on the current main build.

Changes in this tester build only:
- Personal default app data has been removed from the starting dataset.
- Tester data uses separate localStorage keys so it does not load the main-build saved data from the same GitHub Pages origin.
- Added a one-time first-launch onboarding message with 5 slides: Accounts, Budget Setup, Debt Tracker, Holiday Pots and Grant OS Helper.
- The onboarding message uses a stable localStorage key and appears once only on first launch.

No layout, calculations, dropdowns, totals, graphs or existing app functions were intentionally changed.

Chrome test link:
https://grantbulmer.github.io/Grant-OD-Tester/?v=tester-build-3-0-first-launch-onboarding

## Build update: Input Stability Fix

This tester build keeps the existing layout, calculations and functions intact. It only adds an input stability guard so Accounts and Debt Tracker rows save while typing without rebuilding the row/table and jumping the page. The full refresh still runs after the field is left.

Chrome test URL: https://grantbulmer.github.io/Grant-OD-Tester/?v=tester-build-3-0-github-repo-input-stability-fix


## GitHub Pages repo conversion

This package is prepared for the tester repository:
https://github.com/Grantbulmer/Grant-OD-Tester

Upload the contents of this zip to the root of that repository. The expected Chrome/GitHub Pages test URL is:
https://grantbulmer.github.io/Grant-OD-Tester/?v=tester-build-3-0-github-repo-input-stability-fix

No app functions, calculations, layout, helper behaviour or onboarding logic were intentionally changed for this conversion.


Patch: Bill input stability fix for Monthly Fixed Costs / Bills and Test Build 3.0 header label.
