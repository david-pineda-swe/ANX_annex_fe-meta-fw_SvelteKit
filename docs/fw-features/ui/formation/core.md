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
  - [x] TierAFieldset
    - [x] TierB_Fieldgroup
      - [x] InputPlotter
- [x] start a default/sample formation interface using js class
- [x] mock the first form expression outline & integrate with the form plotter
- [>] integrate standard inputs
  - [>] text
  - [ ] Button
  - [ ] radio
  - [ ] checkbox
  - [ ] textarea
  - [ ] email
  - [ ] password
- [ ] integrate data validation