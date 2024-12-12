# Basic Introduction

**The content is adjusted to English users, not just a translation of Chinese one. For example, we removed some
tutorials with BT panel.**

"Manage your Apple ID in a brand-new way" - This is an automated Apple ID detection & unlocking program based on
security questions.

The frontend is used to manage accounts, support adding multiple accounts, and provide a display account page.

Creates a shared page containing multiple accounts and setting a password for the shared page. (Optional)

The backend regularly checks whether the account is locked. If it is locked or 2FA is enabled, it will be automatically
unlocked, the password will be changed, and the password will be reported to the API.

Log in to Apple ID and automatically delete devices in Apple ID.

Enable proxy pool and Selenium cluster to improve the success rate and prevent risk control. (Optional)

The Business Edition has mainly added sales functions. Please choose according to your needs.

The open-source version has **stopped delivering updates**. To continue using the software, it is recommended to switch
to the Personal or Business edition.

Below is a comparison of the features of each version.

| Feature                                     | Open Source | Personal Edition | Business Edition    |
|---------------------------------------------|-------------|------------------|---------------------|
| Scheduled Account Checks                    | ✅           | ✅                | ✅                   |
| Auto Unlock & Disable 2FA                   | ✅           | ✅                | ✅                   |
| Multi-User Support                          | ✅           | ✅                | ✅                   |
| Auto-Update Password                        | ❌           | ✅                | ✅                   |
| Check App Store Status                      | ❌           | ✅                | ✅                   |
| Detect & Change Region                      | ❌           | ✅                | ✅                   |
| Detect & Change Language                    | ❌           | ✅                | ✅                   |
| Detect & Change Name                        | ❌           | ✅                | ✅                   |
| Domain Restriction for Sharing Pages*       | ❌           | ✅                | ✅                   |
| Bulk Account Addition                       | ❌           | ✅                | ✅                   |
| Custom Password Prefix                      | ❌           | ✅                | ✅                   |
| Remove iCloud Lost Mode                     | ❌           | ✅                | ✅                   |
| Support Multiple Page Templates             | ❌           | ✅                | ✅                   |
| Random Display of Accounts on Sharing Pages | ❌           | ❌                | ✅                   |
| Account Tagging                             | ❌           | ❌                | ✅                   |
| User Permission Settings*                   | ❌           | ❌                | ✅                   |
| Unlock Package Sales*                       | ❌           | ❌                | ✅                   |
| Account Rental*                             | ❌           | ❌                | ✅                   |
| Online Payment*                             | ❌           | ❌                | ✅                   |
| Recharge Card Support                       | ❌           | ❌                | ✅                   |
| Account Exchange                            | ❌           | ❌                | ✅                   |
| Long-term Maintenance                       | ❌           | ✅                | ✅                   |
| Authorization Method                        | -           | One-time License | Time-based/One-time |

* **Limit Shared Page Domain:** Only authorized domains can reference the sharing page to prevent misuse.
* **Manage Permission of Users:** You can set user expiration dates, maximum account limits, and minimum unlock
  intervals, among other settings.
* **Sale Your Package:** The website comes with an integrated shopping mall feature where administrators can set various
  packages (periods, minimum execution intervals, etc.) for users to purchase.
* **Account Rental:** Administrators can designate accounts as rental accounts and set prices for each rented account (
  billed per day). Users have the option to renew rented accounts.
* **Online Payment:** Currently, we support payment via ePay(易支付), epusdt and voucher.
