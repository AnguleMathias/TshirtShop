/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
const notification = (toastr, notifyType, message) => {
    toastr['options'] = {
      'closeButton': true,
      'positionClass': 'toast-top-center',
      'preventDuplicates': true,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '2000',
      'extendedTimeOut': '100',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut',
      "newestOnTop": true,
    };
    return () => toastr[notifyType](message);
  };
  
  export default notification; 