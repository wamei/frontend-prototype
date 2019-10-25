/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from "@storybook/vue";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';

addDecorator(withKnobs);
addDecorator(withInfo);

configure(require.context("../../src/components", true, /\.stories\.(js|ts)$/), module);
