# Investor Relations — Past 3 Weeks: Staging → Production

**Prepared:** 2026-08-12
**Source:** Staging repo (`Hipark_Reboot_Staging`) — branch `main`
**Target:** Live/production replica of this project
**Window:** 2026-07-22 → 2026-08-12 (21 days)
**Scope:** Every file under Offer Documents / Financial Information / Corporate Governance that git shows as added or modified in that window.

This folder (`inv-rel-live/`) is a **copy-only bundle** — every file is byte-identical to staging, at its original relative path (`src/...`, `components/...`, `public/...`), so it can be overlaid directly onto the production repo root.

---

## 1. Verified scope (how this list was derived)

```
git log --since="21 days ago" --name-status --pretty=format:"%h %ad %s" --date=short -- \
  "src/app/(routes)/offer-documents" "src/app/(routes)/financial-information" \
  "src/app/(routes)/corporate-governance" "src/app/api/download-pdf" \
  "components/offer_documents" "components/material_contracts" \
  "components/financial_information" "components/corporate_governance" "public"
```
run against the whole repo, path-scoped to exactly these directories. Result: **11 commits**, touching **17 distinct files**, listed below. **Corporate Governance again shows zero changes** in this 3-week window — its last modification is still the initial commit (2026-06-24).

Two files that appeared in raw commit `28df510` were excluded as out of scope (unrelated to Investor Relations): `components/industry/imgacc/AccordionTab.jsx` and `components/industry/imgtabs/HCF.jsx` — bundled into the same commit but part of a different section of the site.

---

## 2. How to deploy

1. Back up / branch the production repo first.
2. Copy `inv-rel-live/src/`, `inv-rel-live/components/`, and `inv-rel-live/public/` into the production repo's `src/`, `components/`, and `public/`, **overwriting matching paths**. This is the mechanism that fixes §2a below — overwriting is what replaces any old local-PDF logic with the phpstack-based version.
3. `src/app/(routes)/offer-documents/material-contracts/page.jsx` is a **new route** — if production doesn't have this page yet, this is what creates it.
4. Rebuild and check:
   - `/offer-documents` (Prospectus, RHP, DRHP, Industry Report, Material Contracts teaser)
   - `/offer-documents/material-contracts` (new page — Valuation Report / Credit Rating / SPA download links)
   - `/financial-information` (Annual Audited Financial Statements, Financial Results/Material Subsidiaries, Group Company Financial Statements; note the Quarterly section is now hidden — §4)
5. Confirm the allow-listed host in the download-proxy route (§5) is correct for production.

### 2a. If production is currently serving these PDFs from its own local `public/` folder

The production replica predates this staging rework and may still have its own `public/` PDFs wired up for Offer Documents, Material Contracts, Financial Information, or Corporate Governance (e.g. `pdf: "/some-local-file.pdf"` instead of a full URL). **Every file in this bundle hardcodes the external CMS URL, not a local path** — every `pdf` / `pdf_url` field in all 6 of the changed data-bearing components (`rhp_sec.jsx`, `industry_report_sec.jsx`, `MC_Sec2.jsx`, `Annual_finanacial_sec.jsx`, `Financial_results_secF.jsx`, `Group_company_finance_sec.jsx`) now points at `phpstack-725513-4957654.cloudwaysapps.com` or `phpstack-725513-2688800.cloudwaysapps.com`.

**Do this on the production side:**
- Overwrite production's versions of these files with the ones in this bundle rather than hand-merging — a merge risks preserving old local-path entries alongside the new ones.
- Do **not** re-introduce or fall back to any local `/public/...pdf` reference for content covered by these components — treat phpstack as the single source of truth for these PDFs going forward.
- Any PDFs sitting in production's `public/` folder that were only there to back the *old* local-path links become orphaned once these files are overwritten. They're safe to leave (unused, harmless) or remove, at the production team's discretion — just confirm nothing else in production still links to them before deleting.
- If production has its own Corporate Governance PDF links, note that this bundle contains no Corporate Governance changes (§1) — leave those as they currently are, they weren't touched in this rework.

---

## 3. Still true: no PDFs, and only one public asset

Every PDF link across all three pages' full component trees resolves to an external CMS URL — `phpstack-725513-4957654.cloudwaysapps.com` (Offer Documents / Material Contracts) or `phpstack-725513-2688800.cloudwaysapps.com` (Financial Information / Corporate Governance). None of these pages load a PDF from this repo's `public/` folder, in this window or otherwise — confirmed by grepping every `pdf`/`pdf_url` field in every component under all three pages. `public/offer_documents/` still holds 3 old, unreferenced PDFs on disk from before this project's initial commit; nothing live points to them.

The **only** `public/` file touched in the 3-week window is `public/arrow_btn.svg`, added 2026-07-29 (`6f322f9`) — used by `components/offer_documents/material_contacts/material_contacts_sec.jsx` as the arrow icon on the Offer Documents page's "Material Contracts" teaser card. It's included in this bundle.

---

## 4. Commit-by-commit changelog (oldest → newest)

| Commit | Date | Files (this scope only) | Summary |
|---|---|---|---|
| `28df510` | 2026-07-28 | `financial_infoWrapper.jsx` (M); `Annual_finanacial_sec.jsx` (new); `Financial_results_secF.jsx` (M); `Quaterly_finanacial_sec.jsx` (new); `annual_reports/annual_reports_sec.jsx` → renamed to `Group_company_finance/Group_company_finance_sec.jsx`; `MC_Sec1.jsx`, `MC_Sec2.jsx`, `MC_docsWrapper.jsx` (new); `Offer_docsWrapper.jsx` (M); `drhp_sec.jsx` (M); `industry_report_sec.jsx` (M); `material_contacts_sec.jsx`, `prospectus_sec.jsx`, `rhp_sec.jsx` (new); `offer-documents/material-contracts/page.jsx` (new) | Foundational restructure: split Financial Information's financial-results section into separate Annual/Quarterly components, renamed the old "Annual Reports" section to "Group Company Finance", and stood up the entire Material Contracts sub-page (new page route + 3 new components) plus new Offer Documents sections (Prospectus, RHP, Material Contacts teaser). |
| `24ee15b` | 2026-07-28 | `drhp_sec.jsx`, `industry_report_sec.jsx`, `prospectus_sec.jsx`, `rhp_sec.jsx` (M) | Follow-up pass on the Offer Documents sections just created. |
| `4140e66` | 2026-07-28 | `Group_company_finance_sec.jsx`, `Annual_finanacial_sec.jsx`, `Financial_results_secF.jsx`, `Quaterly_finanacial_sec.jsx` (M) | "Financial investor fixed" — adjustments across all four Financial Information sections. |
| `6df195f` | 2026-07-28 | `Financial_results_secF.jsx`, `Quaterly_finanacial_sec.jsx` (M) | Further fixes to the same two sections. |
| `5590e30` | 2026-07-28 | `Quaterly_finanacial_sec.jsx` (M) | Additional fix. |
| `6f322f9` | 2026-07-29 | `Financial_results_secF.jsx`, `MC_Sec2.jsx`, `material_contacts_sec.jsx` (M); `public/arrow_btn.svg` (new) | Added the arrow icon asset and wired it into the Offer Documents Material Contacts teaser; more data added to Material Subsidiaries and Material Contracts. |
| `b42c096` | 2026-08-06 | `MC_Sec2.jsx` (M); `src/app/api/download-pdf/route.js` (new) | Added the download-proxy API route (§5) and started routing Material Contracts downloads through it. |
| `9146c3c` | 2026-08-10 | `Annual_finanacial_sec.jsx`, `Financial_results_secF.jsx`, `MC_Sec2.jsx`, `rhp_sec.jsx` (M) | Populated previously-empty `pdf`/`pdf_url` placeholders with live CMS URLs across all four files. |
| `eeb15f5` | 2026-08-10 | `rhp_sec.jsx` (M) | Replaced the Draft RHP placeholder link and added a new "RHP AV" list entry (the old standalone RHP-AV button was commented out in favor of it). |
| `da1a3f3` | 2026-08-10 | `MC_Sec2.jsx` (M) | Further Material Contracts data additions. |
| `fa340b7` | 2026-08-11 | `Group_company_finance_sec.jsx`, `Annual_finanacial_sec.jsx`, `Financial_results_secF.jsx`, `MC_Sec2.jsx`, `industry_report_sec.jsx` (M) | Final data pass — filled in the last empty placeholders (Group Company Finance, Annual Financials, Material Subsidiaries) and pointed the Industry Report card at its final external URL. |
| *(uncommitted, today)* | 2026-08-12 | `financial_infoWrapper.jsx`; `Annual_finanacial_sec.jsx`; `Financial_results_secF.jsx`; `Group_company_finance_sec.jsx` | Hid the Quarterly Financial Statements section (`<Quaterly_finanacial_sec />` commented out) and shifted the three remaining Financial Information section backgrounds to keep the alternating light-grey/white pattern intact — see §4a. Not yet committed on staging; the copied files already reflect this final state. |

### 4a. Financial Information background/zebra change (today, uncommitted)
| Section | Before | After |
|---|---|---|
| Annual Audited Financial Statements | `#fff` | `#F7F7F7` |
| Financial Results / Material Subsidiaries | `#EBEBEB` | `#fff` |
| Group Company Financial Statements | `#fff` | `#F7F7F7` |

---

## 5. Dependency callout: `/api/download-pdf`

`components/material_contracts/MC_Sec2.jsx` builds its download links via:
```js
const getDownloadHref = (url, title) =>
  url
    ? `/api/download-pdf?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(title)}`
    : "#";
```
The route (`src/app/api/download-pdf/route.js`) proxy-fetches the PDF server-side and streams it back with `Content-Disposition: attachment` (forces download instead of opening inline), but only allows one hardcoded host:
```js
const ALLOWED_HOSTS = ["phpstack-725513-4957654.cloudwaysapps.com"];
```
**Action needed:** confirm this is the correct asset host for production before/at deploy. If production serves these PDFs from a different domain, every download link on the Material Contracts page will 403.

---

## 6. Full file manifest (17 files)
```
src/app/(routes)/offer-documents/material-contracts/page.jsx
src/app/api/download-pdf/route.js
components/offer_documents/Offer_docsWrapper.jsx
components/offer_documents/drhp/drhp_sec.jsx
components/offer_documents/industry_report/industry_report_sec.jsx
components/offer_documents/material_contacts/material_contacts_sec.jsx
components/offer_documents/prospectus/prospectus_sec.jsx
components/offer_documents/rhp/rhp_sec.jsx
components/material_contracts/MC_Sec1.jsx
components/material_contracts/MC_Sec2.jsx
components/material_contracts/MC_docsWrapper.jsx
components/financial_information/financial_infoWrapper.jsx
components/financial_information/financial_results/Annual_finanacial_sec.jsx
components/financial_information/financial_results/Financial_results_secF.jsx
components/financial_information/financial_results/Quaterly_finanacial_sec.jsx
components/financial_information/Group_company_finance/Group_company_finance_sec.jsx
public/arrow_btn.svg
```
