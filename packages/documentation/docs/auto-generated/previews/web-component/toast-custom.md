<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/toast-custom.html -->
```html
<ix-toast-container></ix-toast-container>

<ix-button id="toastButton">Trigger toast</ix-button>

<template id="custom-toast">
  <div>
    <div>Custom toast message</div>
    <ix-button>Action</ix-button>
  </div>
</template>

<script type="module">
  import { toast } from './lib/ix/dist/index.js';

  (async function () {
    await window.customElements.whenDefined('ix-toast-container');
    document
      .getElementById('toastButton')
      .addEventListener('click', async () => {
        const customModal = document.createElement('div');
        const template = document.getElementById('custom-toast');
        const templateContent = template.content;
        customModal.appendChild(templateContent);

        const instance = await toast({
          message: customModal,
        });

        customModal
          .querySelector('ix-button')
          .addEventListener('click', () => {
            instance.close();
          });
      });
  })();
</script>
```