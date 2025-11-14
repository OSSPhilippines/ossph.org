import * as functions from 'firebase-functions'
import { ssrProductionExport } from 'quasar/wrappers'

export default ssrProductionExport(({ ssrHandler }) => {
  return {
    ossphSSRHandler: functions.https.onRequest(ssrHandler),
  }
})
