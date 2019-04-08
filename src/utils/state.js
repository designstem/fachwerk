import { Vue } from "../../fachwerk.js"

export const send = function(channel, value) {
  if (this.$global) {
    this.$global.$emit(channel, value);
  }
};

export const goto = function(value) {
  if (this.$global) {
    this.$global.$emit('goto', value);
  }
};

export const receive = function(channel, callback) {
  if (this.$global) {
    this.$global.$on(channel, callback);
  }
};

export const get = function(key, def = null) {
  if (this.$global) {
    const state = this.$global.$data.state[key];
    return state !== undefined ? state : def;
  }
  return null;
};

export const set = function(key, value) {
  if (this.$global) {
    const arr = Array.from(arguments);
    if (arr.length == 1) {
      key = "value";
      value = arr[0];
    }
    Vue.set(this.$global.$data.state, key, JSON.parse(JSON.stringify(value)));
  }
  return null;
};
