'use strict';

module.exports = function(Product) {

};


'use strict';

module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const openHour = 6;
    const closeHour = 20;

    if (currentHour > openHour && currentHour < closeHour) {
      const response = 'We are open for business.';
    } else {
      const response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  CoffeeShop.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};
