import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Global CSS

// Import the necessary components and directives
import { VApp, VContainer, VForm, VTextField, VBtn } from 'vuetify/components';

const vuetify = createVuetify({
  components: {
    VApp,
    VContainer,
    VForm,
    VTextField,
    VBtn,
  },
});

export default vuetify;