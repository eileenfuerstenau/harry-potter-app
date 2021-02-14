import CreateForm from './CreateForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Pages/CreateForm',
  component: CreateForm,
}

export const base = () => CreateForm(action('onSubmit')).el
