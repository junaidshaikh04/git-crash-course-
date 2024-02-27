this.process = function process(values) {
    var fnObj = this.extract(this.fn);
    if (!utils.isObject(fnObj)) {
        throw new CasperError("Unable to process function " + this.fn.toString());
    }
    var inject = this.getArgsInjectionString(fnObj.args, values);
    var newFn = new Function([inject, fnObj.body].join('\n'));
    newFn.name = fnObj.name || '';
    return newFn;
};