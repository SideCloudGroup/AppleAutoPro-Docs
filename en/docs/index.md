# Basic Introduction

"Manage your Apple ID in a brand-new way" - This is an automated Apple ID detection & unlocking program based on security questions.

The frontend is used to manage accounts, support adding multiple accounts, and provide a display account page.

Creates a shared page containing multiple accounts and setting a password for the shared page. (Optional)

The backend regularly checks whether the account is locked. If it is locked or 2FA is enabled, it will be automatically unlocked, the password will be changed, and the password will be reported to the API.

Log in to Apple ID and automatically delete devices in Apple ID.

Enable proxy pool and Selenium cluster to improve the success rate and prevent risk control. (Optional)

The Business Edition has mainly added sales functions. Please choose according to your needs.

The Opensource Edition has **ceased** updates. If you wish to continue using it, it is recommended to switch to the Personal Edition or Business Edition.

Below is a comparison of the features of each version.

| Functions                                     | Opensource Edition | Personal Edition | Business Edition |
|-----------------------------------------------|--------------------|------------------|------------------|
| Regular Account Monitoring                    | ✅                  | ✅                | ✅                |
| Unlock Accounts or Disable 2FA Automatically | ✅                  | ✅                | ✅                |
| Multiple Users                                | ✅                  | ✅                | ✅                |
| Detect App Store Status                       | ❌                  | ✅                | ✅                |
| Detect Apple ID Region                        | ❌                  | ✅                | ✅                |
| Detect and Change Apple ID Language           | ❌                  | ✅                | ✅                |
| Limit Shared Page Domain*                     | ❌                  | ✅                | ✅                |
| Batch Accounts Insertion                      | ❌                  | ✅                | ✅                |
| Custom Prefix for Passwords                   | ❌                  | ✅                | ✅                |
| Random Display of Accounts on Shared Page     | ❌                  | ❌                | ✅                |
| Sorting Accounts with Tags                    | ❌                  | ❌                | ✅                |
| Manage Permission of Users*                   | ❌                  | ❌                | ✅                |
| Sale Your Package*                            | ❌                  | ❌                | ✅                |
| Account Rental*                               | ❌                  | ❌                | ✅                |
| Online Payment*                               | ❌                  | ❌                | ✅                |
| Recharge Key                                  | ❌                  | ❌                | ✅                |
| Account Redemption                            | ❌                  | ❌                | ✅                |
| Long-term Maintenance                         | ❌                  | ✅                | ✅                |
| Authorization Method                          | -                   | One-time         | Time-based/One-time |


* **Limit Shared Page Domain：**Only authorized domains can reference the sharing page to prevent misuse.
* **Manage Permission of Users：**You can set user expiration dates, maximum account limits, and minimum unlock intervals, among other settings.
* **Sale Your Package：**The website comes with an integrated shopping mall feature where administrators can set various packages (periods, minimum execution intervals, etc.) for users to purchase.
* **Account Rental：**Administrators can designate accounts as rental accounts and set prices for each rented account (billed per day). Users have the option to renew rented accounts.
* **Online Payment：**Currently, we support payment via YiZhiFu and recharge using prepaid keys.
