[Back to Home](../../../../README.MD)

### fw-features/rendering
# Formation

This component allows instant form creation via a content expression object.

[SAMPLE_TBD]

## System Dependencies & Sub components
- app API
- app store
- app proc service
---
- FormaController
- Formation
- FormaGenerator
- FormaPlotter
- FormaInputs

## Development Game Plan
- [x] Start the container
- [x] generative plotter system
  - [x] FieldsetPlotter
    - [x] FieldgroupPlotter
      - [x] InputPlotter
- [ ] mock the first content expression outline & integrate the plotter
- [ ] integrate standard inputs
  - [ ] text
  - [ ] Button
  - [ ] radio
  - [ ] checkbox
  - [ ] textarea
  - [ ] email
  - [ ] password
- [ ] integrate data validation