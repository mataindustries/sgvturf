# SGVTurf Analytics Event Map

SGVTurf reuses the existing Google Analytics `gtag` integration through `window.SGVTurfAnalytics`. No second analytics platform was added.

| Event | Trigger | Parameters |
| --- | --- | --- |
| `ad_landing_view` | First paid landing-page view in a tab session | `page_path` |
| `project_brief_start` | First focus inside a homeowner brief per page load | `source_page` |
| `project_brief_submit_success` | API confirms homeowner-brief delivery | `source_page` |
| `project_brief_submit_error` | API rejection, delivery failure, or network failure | `source_page`, plus `status_code` or `error_type` |
| `contractor_join_view` | First contractor-join view in a tab session | `page_path` |
| `contractor_application_start` | First focus inside contractor intake per page load | `source_page` |
| `contractor_application_submit_success` | API confirms contractor-application delivery | `source_page` |
| `contractor_application_submit_error` | API rejection, delivery failure, or network failure | `source_page`, plus `status_code` or `error_type` |

`phone_click` is intentionally absent because no verified public phone CTA exists.

Attribution fields preserved in session storage and submitted as hidden fields are `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `gclid`, `gbraid`, `wbraid`, and `msclkid`. The event payloads do not include names, email addresses, phone numbers, project descriptions, or other submitted personal data.
