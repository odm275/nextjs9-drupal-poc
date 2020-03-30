# Nextjs 9 POC w/Drupal 8

## Goals
  - Simple enough routing solution between Drupal <-> Nextjs:
    - Off Paths -> Should route to a default template. Ex: User creates page basic page to path /special-winter-promotion, or /promotions/winter-promotions.
    - Same Route level can render different templates.
      - ex: /info/[page].js could render /info/contact-us -> use pageTemplate or /info/specials uses specialTemplate.
  - Auto Generated XML Sitemap.


## Nice findings on the side

  - Gin admistartion theme(uses claro as base) is ideal for a decoupled drupal project:
      - Shifts the whole focus to the administration part of drupal(the part drupal has full responsibility over).
      - Awesome modern admin interface, and dark mode!