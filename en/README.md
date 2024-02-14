---
description: “以全新方式管理你的 Apple ID”
---

# Basic Introduction (Revised)

"Manage your Apple ID in a brand-new way" - This is an automated Apple ID detection & unlocking program based on security questions.

The frontend is used to manage accounts, support adding multiple accounts, and provide a display account page.

Creates a shared page containing multiple accounts and setting a password for the shared page. (Optional)

The backend regularly checks whether the account is locked. If it is locked or 2FA is enabled, it will be automatically unlocked, the password will be changed, and the password will be reported to the API.

Log in to Apple ID and automatically delete devices in Apple ID.

Enable proxy pool and Selenium cluster to improve the success rate and prevent risk control. (Optional)



以下是各个版本的功能对比。开源版已**停止更新**，如需继续使用，建议更换个人版或商业版。

商业版主要加入了销售功能，请根据需求选择。

开源版与Pro（个人版、商业版）使用的后端版本不同，开源版后端仅做关键功能修复，Pro后端会保持优化与更新

<table><thead><tr><th width="258">Functions</th><th>Opensource Edition</th><th>Personal Edition</th><th>Business Edition</th></thead><tbody><tr><td>Regular Account Monitoring</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Unlock Accounts or Disable 2FA Automatically</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Multiple Users</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Detect App Store Status</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Detect Apple ID Region</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Detect and Change  Apple ID Language</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Limit Shared Page Domain*</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Batch Accounts Insertion</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Custom Prefix for Passwords</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Random Display of Accounts on Shared Page</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Sorting Accounts with Tags</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Manage Permission of Users*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Sale Your Package*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Account Rental*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Online Payment*</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Recharge Key</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Account Redemption</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Long-term Maintenance</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Authorization Method</td><td>-</td><td>One-time</td><td>Time-based/One-time</td></tr></tbody></table>

* **Limit Shared Page Domain：**Only authorized domains can reference the sharing page to prevent misuse.
* **Manage Permission of Users：**You can set user expiration dates, maximum account limits, and minimum unlock intervals, among other settings.
* **Sale Your Package：**The website comes with an integrated shopping mall feature where administrators can set various packages (periods, minimum execution intervals, etc.) for users to purchase.
* **Account Rental：**Administrators can designate accounts as rental accounts and set prices for each rented account (billed per day). Users have the option to renew rented accounts.
* **Online Payment：**Currently, we support payment via YiZhiFu and recharge using prepaid keys.
