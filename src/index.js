class Vue {
    constructor(options) {
        this.data = options.data;
        this.methods = options.methods;
        this.mounted = options.mounted;
        this.el = options.el;

        this.init();
    }

    init() {
        Object.keys(this.data).forEach(key => {
            this.proxy(key);
        });
        observe(this.data, this);
        const compile = new Compile(this.el, this);
        this.callHook('mounted');
    }

    proxy(key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function () {
                return this.data[key]
            },
            set: function (newVal) {
                this.data[key] = newVal;
            }
        });
    }

    callHook(lifecycle) {
        this[lifecycle]();
    }
}
