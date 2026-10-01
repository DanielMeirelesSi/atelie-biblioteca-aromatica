import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bc78r3ux',
    dataset: 'production'
  },
  deployment: {
    appId: 'ga40futl6lm9brfxmabbffdr',
    autoUpdates: true,
  },
})
