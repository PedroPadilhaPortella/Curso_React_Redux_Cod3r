import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/TabReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
})

export default rootReducer