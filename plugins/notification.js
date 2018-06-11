// Include Plugin in project
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
 
// Include mini-toaster
import miniToastr from 'mini-toastr'
 
// toastTypes configuration
const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}
 
miniToastr.init({types: toastTypes})
 
// Here we setup messages output to `mini-toastr`
function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
Vue.use(VueNotifications, options)
console.log('vue notification plugin activated')