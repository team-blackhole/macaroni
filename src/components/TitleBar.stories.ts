import { html } from 'lit'

import './TitleBar'

export default {
  title: 'Components/TitleBar',
  component: 'macaroni-title-bar'
}

const Template = ({ stripe, titleText }) =>
  html`
    <macaroni-title-bar ?stripe="${stripe}">${titleText}</macaroni-title-bar>`

export const Default = Template.bind({})

Default.args = {
  stripe: false,
  titleText: 'sample title'
}

export const Stripe = Template.bind({})

Stripe.args = {
  stripe: true,
  titleText: 'sample title'
}
