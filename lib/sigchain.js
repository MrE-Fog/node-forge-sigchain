// Generated by IcedCoffeeScript 1.8.0-d
(function() {
  var Sigchain, iced, __iced_k, __iced_k_noop;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  exports.Sigchain = Sigchain = (function() {
    function Sigchain(_arg) {
      var api, merkle_triple, storage, uid;
      uid = _arg.uid, merkle_triple = _arg.merkle_triple, storage = _arg.storage, api = _arg.api;
      this._uid = uid;
      this._merkle_triple = merkle_triple;
      this._storage = storage;
      this._api = api;
    }

    Sigchain.prototype.save = function(_arg, cb) {
      _arg;
      return cb(null);
    };

    Sigchain.load = function(_arg, cb) {
      var api, ch, err, merkle_triple, storage, uid, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      uid = _arg.uid, merkle_triple = _arg.merkle_triple, storage = _arg.storage, api = _arg.api;
      ch = new Sigchain({
        uid: uid,
        merkle_triple: merkle_triple,
        storage: storage,
        api: api
      });
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/node-sigchain/src/sigchain.iced",
            funcname: "Sigchain.load"
          });
          ch._load({}, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 26
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err, ch);
        };
      })(this));
    };

    Sigchain.prototype._load = function(_arg, cb) {
      _arg;
      return cb(null);
    };

    return Sigchain;

  })();

}).call(this);