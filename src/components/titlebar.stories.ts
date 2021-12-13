import { html } from 'lit'

import './titlebar'

export default {
  title: 'Components/titlebar',
  component: 'macaroni-titlebar'
}

const Template = ({ stripe, titleText }) =>
  html`
    <macaroni-titlebar ?stripe="${stripe}">${titleText}</macaroni-titlebar>`

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
