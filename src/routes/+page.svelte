<script lang="ts">
  import logo from '$pec/images/branding/Free4m-IO_logo_wht_v14.svg';
  import logoType from '$pec/images/branding/Free4m-IO_logo-type_wht_v11.svg';
  import IconIndex from '@annexjs/core/webapp/display/icon-index.svelte';
  import DynamicSection from '@annexjs/ui/layout/dynamic-section.svelte';
</script>

<svelte:head>
  <title>Free4m IO | Web, Software, & Media Production</title>
</svelte:head>

<DynamicSection supportClasses={'lg hero'} layout={'stacked'}>
  <span class="hero-bg" slot="background" />
  <!-- <img src={heroBG_01} alt="" aria-hidden slot="background"/> -->

  <div slot="primary">
    <h1>Grow and Build with Modern Web and Software.</h1>
  </div>
  <div slot="secondary">
    <h2>Using AI, and Web3 - We Deliver Effective Solutions for the Digital Marketplace.</h2>
  </div>
  <div slot="tertiary">
    <a href="https://forms.gle/TpzwSDpEsAz9wHcA7" target="_blank" class="ui-btn lg"
      >Let's Get To Work!</a
    >
    <!-- TODO CTA "LET'S GET TO WORK" -->
  </div>
</DynamicSection>

<DynamicSection supportClasses={'lg hero'} layout={'stacked'}>
  <h1>
    Unlock the Power of Possibilities with us - Your Trusted Web and Software Development Partner.
  </h1>

  <p>
    At Free4m, we don't just build websites and software - we architect digital experiences that
    resonate.
  </p>
  <p>
    Elevate your brand, streamline your processes, and amplify your online presence with our
    cutting-edge web and software solutions.
  </p>
  <p>
    With a passion for innovation and a commitment to excellence, we're your ultimate destination
    for transforming ideas into reality.
  </p>
</DynamicSection>

<DynamicSection supportClasses={'lg hero'} layout={'stacked'}>
  <ul>
    <li>
      <IconIndex designation={'ICONIFY_mdi:desktop-classic_large|NA|white'} />
      <h2>Website / Software Development</h2>
      <ul>
        <li>Design</li>
        <li>Development</li>
        <li>SAAS product prototypes</li>
        <li>Platform management</li>
        <li>ecommerce sites</li>
        <li>SEO planning and management</li>
        <li>Wordpress</li>
        <li>Shopify</li>
      </ul>
    </li>
    <li>
      <IconIndex designation={'ICONIFY_mdi:link-variant_large|NA|white'} />
      <h2>Blockchain Development</h2>
      <ul>
        <li />
        <li>Smart contract prototyping & development</li>
        <li>Audit Management</li>
        <li>Chain Analytics</li>
      </ul>
    </li>
    <!-- <li>
        <IconIndex designation={'ICONIFY_mdi:safety-goggles_large|NA|white'}/>
        <h2>VR & XR Development</h2>
        <p>Concept & design</p>
        <p>Development</p>
        <p>Asset creation & management</p>
      </li> -->
    <!-- <li>
        <h2>Game Development</h2>
        <p>asdf</p>
      </li> -->
    <li>
      <IconIndex designation={'ICONIFY_mdi:video-image_large|NA|white'} />
      <h2>Video & Media Production</h2>
      <ul>
        <li>Post production</li>
        <li>Content Creation</li>
        <li>AI Generative Enhancements</li>
      </ul>
    </li>
    <li>
      <IconIndex designation={'ICONIFY_mdi:video-image_large|NA|white'} />
      <h2>Creative</h2>
      <ul>
        <li>Web Design</li>
        <li>Logo & Brand Design</li>
        <li>AI Generative Enhancements</li>
      </ul>
    </li>
  </ul>
</DynamicSection>

<style lang="scss">
  /* TODO - MOVE THIS TO SPEC STYLES */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: var(--section-side-padding);
    padding-right: var(--section-side-padding);
    padding-bottom: var(--section-vertical-padding);
    margin-bottom: var(--section-bottom-margin);
  }

  .hero-bg {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url('/images/theming/hero_general_02.jpg');
    background-size: cover;
  }

  // LEGACY
  .hero {
    background-color: rgba(36, 5, 54, 0.592);

    ul {
      text-align: left;
      li {
        font-weight: bold;
      }
    }
  }
  .hero-branding {
    text-align: center;

    // img {
    // 	margin: 0 auto;
    // 	width: 50%;
    // }
  }
</style>
