import { html } from 'lit'

import './Window'

export default {
  title: 'Components/Window',
  component: 'macaroni-window'
}

const Template = ({ titleText, contentText }) =>
  html`
    <macaroni-window ?title="${titleText}">
      ${contentText}
    </macaroni-window>`

export const Default = Template.bind({})

Default.args = {
  titleText: 'sample title',
  contentText: 'sample content'
}
