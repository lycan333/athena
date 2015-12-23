'use strict';

var scan = require('./athena_scan');
var concat = require('./athena_concat');
var concatCore = require('./athena_concat_core');
var combo = require('./athena_combo');
var replace = require('./athena_replace');
var rev = require('./athena_rev');
var imagemin = require('./athena_imagemin');
var csso = require('./athena_csso');
var uglify = require('./athena_uglify');
var ssh = require('./athena_ssh');
var inject = require('./athena_inject');
var pre = require('./athena_pre');
var compass = require('./athena_compass');
var ftp = require('./athena_ftp');

module.exports = {
  scan: scan,
  concat: concat,
  concatCore: concatCore,
  combo: combo,
  replace: replace,
  rev: rev,
  imagemin: imagemin,
  csso: csso,
  uglify: uglify,
  ssh: ssh,
  inject: inject,
  compass : compass,
  pre: pre,
  ftp: ftp
};