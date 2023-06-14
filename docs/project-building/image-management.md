# Image Management

- static folder to support body in-line content
<picture>
  <source srcset="svelte-welcome.webp" type="image/webp" />
  <img src="svelte-welcome.png" alt="Welcome" />
</picture>

- static folder for generic, third party, accross multiple projects
<img src="Free4m-IO_logo_wht_v14.svg" alt="Free4m Logo" /> 

- relative to components for motif and assets specialized to component features
import logo from './images/svelte-logo.svg';
<img src={logo} alt="Free4m Logo"/>

- in the spec-to-project for theming, branding and motif shared across project
import logo from '$pec/images/Free4m-IO_logo_wht_v14.svg';
<img src={logo} alt="Free4m Logo"/>


