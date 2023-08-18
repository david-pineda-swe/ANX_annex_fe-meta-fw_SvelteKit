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
- [x] Add input base layout
  - [x] with [Zod](https://zod.dev/)
  - [x] with [Zod Form Data](https://www.npmjs.com/package/zod-form-data)
  - [x] Standard form styles
- [>] integrate standard inputs
  - [x] text
  - [x] email
  - [x] Custom Action Button
  - [x] password
  - [>] radio
  - [>] checkbox
  - [ ] textarea
- [ ] integrate data validation