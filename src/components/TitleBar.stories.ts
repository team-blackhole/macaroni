import { html } from 'lit'

import './TitleBar'

export default {
  title: 'Components/TitleBar',
  component: 'macaroni-title-bar'
}

const Template = ({ stripe, titleText, closeBox, zoomBox }) =>
  html`
    <macaroni-title-bar stripe="${stripe}" closeBox="${closeBox}" zoomBox="${zoomBox}">
      ${titleText}
    </macaroni-title-bar>`

export const Default = Template.bind({})

Default.args = {
  stripe: false,
  closeBox: false,
  zoomBox: false,
  titleText: 'sample title'
}

export const Stripe = Template.bind({})

Stripe.args = {
  stripe: true,
  closeBox: true,
  zoomBox: true,
  titleText: 'sample title'
}
