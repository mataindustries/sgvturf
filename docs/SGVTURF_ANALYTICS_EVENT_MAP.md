# SGVTurf Analytics Event Map

SGVTurf continues to use the existing Google Analytics `gtag` wrapper. No second analytics framework or personal form data is sent to analytics.

| Event | Trigger | Non-PII parameters |
| --- | --- | --- |
| `landing_view` | First paid landing-page view in a tab session | `page_path` plus campaign attribution |
| `primary_cta_click` | Click on a primary homeowner yard-brief CTA | `page_path` plus campaign attribution |
| `project_form_start` | First focus inside a homeowner form per page load | `source_page` plus campaign attribution |
| `project_form_success` | Shared API confirms homeowner webhook delivery | `page_path` plus campaign attribution |
| `contractor_cta_click` | Click on a contractor-test CTA | `page_path` plus campaign attribution |
| `contractor_form_start` | First focus inside a contractor form per page load | `source_page` plus campaign attribution |
| `contractor_form_success` | Shared API confirms contractor webhook delivery | `page_path` plus campaign attribution |
| `form_delivery_error` | Webhook rejection, delivery-service failure, or network failure | `page_path`, `status_code` or `error_type`, plus campaign attribution |

Campaign attribution consists of `source`, `medium`, `campaign`, `content`, and `term`, captured from their corresponding `utm_*` query parameters. Supported click identifiers are `gclid`, `gbraid`, `wbraid`, and `msclkid`. These values persist in session storage and are submitted with both primary forms. Names, email addresses, phone numbers, business names, descriptions, service areas, and other submitted form fields are never added to an analytics event.

## ChatGPT Ads Pixel

No pixel ID has been invented or installed. After Ads Manager supplies the official ChatGPT Ads Pixel ID and installation instructions, add its base tag in `src/layouts/BaseLayout.astro` beside the existing analytics initialization. Map only the eight events above, preserve the same non-PII attribution boundary, verify any required consent behavior, and test with the official Ads Manager diagnostic before activating a campaign.
