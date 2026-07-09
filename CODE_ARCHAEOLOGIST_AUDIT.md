# Grant OS Tester Build 3.0 - Build Notes

Baseline: Grant OS Main Build 3.0 Helper Overdraft Hint Fix.

Tester-only changes applied:

1. Personal default data removed
   - Starting wage/balances/overdrafts set to blank/zero values.
   - Saved bills, debts, holiday pots, relocation pots and job application defaults cleared.
   - Existing app schemas are preserved so adding rows still works normally.

2. Tester storage isolation
   - Main storage key changed from `grantOS_v1` to `grantOS_TESTER_v1`.
   - Accounts storage key changed from `grantOS.accounts.v2554` to `grantOS_TESTER.accounts.v2554`.
   - Helper and forecast storage keys isolated for tester usage.
   - This prevents tester builds on the same GitHub Pages origin from reading Grant's main-build saved browser data.

3. First-launch onboarding
   - Added tester-only one-time message board.
   - LocalStorage key: `grantOS_TESTER_firstLaunchOnboarding_v1`.
   - The key is set as soon as the message is shown, so it does not appear again on refresh or relaunch.
   - Slides included: Accounts, Budget Setup, Debt Tracker, Holiday Pots and Grant OS Helper.

No intentional changes were made to layout, calculations, graph logic, helper logic, dropdown behaviour, totals, holiday sync, debt sync, or dashboard card structure.
