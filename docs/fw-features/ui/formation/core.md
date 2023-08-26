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
- [x] integrate standard inputs
  - [x] text
  - [x] email
  - [x] Custom Action Button
  - [x] password
  - [x] radio
  - [x] checkbox
  - [x] textarea
- [x] formData STATE TRACKING
  - [x] TARGET FORM LEVEL SCHEMA STATE FOR ALL INPUTS TYPES to track
  - [x] FORM INITIALIZATION schema PRE-LOAD
- [x] REQUIRED indication
- [>] integrate data validation
  - [?] Integrate ZFD FORM submission
  - [>] Validation Gate
  - [ ] Plan standard network client
  - [ ] LOOK FOR AN API TO TEST AGAINST
  - [ ] Handle form submition errors and success
    - [ ] REQUEST ERROR HANDLING GEN / SPEC
    - [ ] DEFAULT ERRORS AND HINTS ON AUGMENTATION
    - [ ] FORM LEVEL ERRORS
  - [ ] Form submit success
    - [ ] - consider state/scenario slots - toasts and validation messaging
- [ ] reset form fi.method()
- [ ] Programatic input disabled - FIGURE OUT $status.disabled
- [ ] EXTEND CUSTOM_BTN to allow template interpolation from form level state / formData to button.node.label
- [ ] - Consider tracking and conversion analytics
- [ ] - PASS OUTLINE TO THIS TIER FOR "inputSetType" [STANDARD, EXTENDED, DYNAMIC, BETA]
- [ ] - LOW PRIORIY - ADD CLICK DRAG RESIZING FOR MOBILE
- [ ] - re-initialize form or swap to another form on invalidation event
- [ ] - set & clear hints
- [ ] - flag on PROD vs. DEV to show dev error messages