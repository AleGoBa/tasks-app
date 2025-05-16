import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

export default {
    theme: {
        preset: definePreset(Aura, {
            semantic: {
                primary: {
                    50: '#ecfdf5',
                    100: '#d0fbe6',
                    200: '#a6f4d1',
                    300: '#6ce9b9',
                    400: '#35d69e',
                    500: '#0ebb85',
                    600: '#03986d',
                    700: '#027a5a',
                    800: '#056049',
                    900: '#054f3c',
                    950: '#012d23',
                },
                secondary: {
                    50: '#f5f7fa',
                    100: '#ebeff3',
                    200: '#d2dce5',
                    300: '#aabdcf',
                    400: '#7c9ab4',
                    500: '#5c7d9b',
                    600: '#486581',
                    700: '#3d546c',
                    800: '#344558',
                    900: '#2f3d4b',
                    950: '#1f2732',
                },
                borderRadius: '20px',
                colorScheme: {
                    dark: {
                        surface: {
                            0: '#ffffff',
                            50: '{secondary.50}',
                            100: '{secondary.100}',
                            200: '{secondary.200}',
                            300: '{secondary.300}',
                            400: '{secondary.400}',
                            500: '{secondary.500}',
                            600: '{secondary.600}',
                            700: '{secondary.700}',
                            800: '{secondary.800}',
                            900: '{secondary.900}',
                            950: '{secondary.950}',
                        },
                    },
                    light: {
                        surface: {
                            0: '{secondary.50}',
                            50: '{secondary.50}',
                            100: '{secondary.100}',
                            200: '{secondary.200}',
                            300: '{secondary.300}',
                            400: '{secondary.400}',
                            500: '{secondary.500}',
                            600: '{secondary.600}',
                            700: '{secondary.600}',
                            800: '{secondary.800}',
                            900: '{secondary.900}',
                            950: '{secondary.950}',
                        },
                    },
                },
            },
        }),
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
            cssLayer: false,
        },
    },
};
