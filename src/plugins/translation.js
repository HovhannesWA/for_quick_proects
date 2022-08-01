import en from "./../locals/en.json";

export default {
  install: (app, options = en) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$tr = (key) => {
      // retrieve a nested property in `options`
      // using `key` as the path      
      return key.split(".").reduce((o, i) => {        
        if (o) return o[i];
      }, options);
    };
  },
};
