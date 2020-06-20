require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/cy":[function(require,module,exports){
"use strict";

module.exports = {
  accepted: 'Rhaid derbyn :attribute.',
  active_url: 'Nid yw :attribute yn URL dilys.',
  after: 'Rhaid i :attribute fod yn ddyddiad sydd ar ôl :date.',
  after_or_equal: 'The :attribute must be a date after or equal to :date.',
  alpha: 'Dim ond llythrennau\'n unig gall :attribute gynnwys.',
  alpha_dash: 'Dim ond llythrennau, rhifau a dash yn unig gall :attribute gynnwys.',
  alpha_num: 'Dim ond llythrennau a rhifau yn unig gall :attribute gynnwys.',
  attributes: {},
  array: 'Rhaid i :attribute fod yn array.',
  before: 'Rhaid i :attribute fod yn ddyddiad sydd cyn :date.',
  before_or_equal: 'The :attribute must be a date before or equal to :date.',
  between: {
    numeric: 'Rhaid i :attribute fod rhwng :min a :max.',
    file: 'Rhaid i :attribute fod rhwng :min a :max kilobytes.',
    string: 'Rhaid i :attribute fod rhwng :min a :max nodyn.',
    array: 'Rhaid i :attribute fod rhwng :min a :max eitem.'
  },
  "boolean": 'Rhaid i\'r maes :attribute fod yn wir neu gau.',
  confirmed: 'Nid yw\'r cadarnhad :attribute yn gyfwerth.',
  date: 'Nid yw :attribute yn ddyddiad dilys.',
  date_format: 'Nid yw :attribute yn y fformat :format.',
  different: 'Rhaid i :attribute a :other fod yn wahanol.',
  digits: 'Rhaid i :attribute fod yn :digits digid.',
  digits_between: 'Rhaid i :attribute fod rhwng :min a :max digid.',
  dimensions: 'The :attribute has invalid image dimensions.',
  distinct: 'The :attribute field has a duplicate value.',
  email: 'Rhaid i :attribute fod yn gyfeiriad ebost dilys.',
  file: 'The :attribute must be a file.',
  filled: 'Rhaid cynnwys :attribute.',
  exists: 'Nid yw :attribute yn ddilys.',
  gt: {
    numeric: 'The :attribute must be greater than :value.',
    file: 'The :attribute must be greater than :value kilobytes.',
    string: 'The :attribute must be greater than :value characters.',
    array: 'The :attribute must have more than :value items.'
  },
  gte: {
    numeric: 'The :attribute must be greater than or equal :value.',
    file: 'The :attribute must be greater than or equal :value kilobytes.',
    string: 'The :attribute must be greater than or equal :value characters.',
    array: 'The :attribute must have :value items or more.'
  },
  image: 'Rhaid i :attribute fod yn lun.',
  "in": 'Nid yw :attribute yn ddilys.',
  in_array: 'The :attribute field does not exist in :other.',
  integer: 'Rhaid i :attribute fod yn integer.',
  ip: 'Rhaid i :attribute fod yn gyfeiriad IP dilys.',
  ipv4: 'The :attribute must be a valid IPv4 address.',
  ipv6: 'The :attribute must be a valid IPv6 address.',
  json: 'The :attribute must be a valid JSON string.',
  lt: {
    numeric: 'The :attribute must be less than :value.',
    file: 'The :attribute must be less than :value kilobytes.',
    string: 'The :attribute must be less than :value characters.',
    array: 'The :attribute must have less than :value items.'
  },
  lte: {
    numeric: 'The :attribute must be less than or equal :value.',
    file: 'The :attribute must be less than or equal :value kilobytes.',
    string: 'The :attribute must be less than or equal :value characters.',
    array: 'The :attribute must not have more than :value items.'
  },
  max: {
    numeric: 'Ni chai :attribute fod yn fwy na :max.',
    file: 'Ni chai :attribute fod yn fwy na :max kilobytes.',
    string: 'Ni chai :attribute fod yn fwy na :max nodyn.',
    array: 'Ni chai :attribute fod yn fwy na :max eitem.'
  },
  mimes: 'Rhaid i :attribute fod yn ffeil o\'r math: :values.',
  mimetypes: 'Rhaid i :attribute fod yn ffeil o\'r math: :values.',
  min: {
    numeric: 'Rhaid i :attribute fod o leiaf :min.',
    file: 'Rhaid i :attribute fod o leiaf :min kilobytes.',
    string: 'Rhaid i :attribute fod o leiaf :min nodyn.',
    array: 'Rhaid i :attribute fod o leiaf :min eitem.'
  },
  not_in: 'Nid yw :attribute yn ddilys.',
  not_regex: 'The :attribute format is invalid.',
  numeric: 'Rhaid i :attribute fod yn rif.',
  present: 'The :attribute field must be present.',
  regex: 'Nid yw fformat :attribute yn ddilys.',
  required: 'Rhaid cynnwys :attribute.',
  required_if: 'Rhaid cynnwys :attribute pan mae :other yn :value.',
  required_unless: 'The :attribute field is required unless :other is in :values.',
  required_with: 'Rhaid cynnwys :attribute pan mae :values yn bresennol.',
  required_with_all: 'Rhaid cynnwys :attribute pan mae :values yn bresennol.',
  required_without: 'Rhaid cynnwys :attribute pan nad oes :values yn bresennol.',
  required_without_all: 'Rhaid cynnwys :attribute pan nad oes :values yn bresennol.',
  same: 'Rhaid i :attribute a :other fod yn gyfwerth.',
  size: {
    numeric: 'Rhaid i :attribute fod yn :size.',
    file: 'Rhaid i :attribute fod yn :size kilobytes.',
    string: 'Rhaid i :attribute fod yn :size nodyn.',
    array: 'Rhaid i :attribute fod yn :size eitem.'
  },
  string: 'The :attribute must be a string.',
  timezone: 'Rhaid i :attribute fod yn timezone dilys.',
  unique: 'Mae :attribute eisoes yn bodoli.',
  uploaded: 'The :attribute failed to upload.',
  url: 'Nid yw fformat :attribute yn ddilys.'
};

},{}]},{},[]);
