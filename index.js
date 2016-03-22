define(["require", "exports"], function (require, exports) {
    function createElement(type, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var ctor = null;
        if (typeof type === "string") {
            ctor = mz.widgets.BaseElement;
            var typeStr = type.toLowerCase();
            if (typeStr in mz.widgets)
                ctor = mz.widgets[typeStr];
            if (props && props instanceof Array && !children) {
                children = props;
                props = null;
            }
            return new ctor(null, mz.copy({ tag: typeStr }, props || {}), children || []);
        }
        else
            ctor = type;
        return new ctor(null, props || {}, children || []);
    }
    exports.createElement = createElement;
    exports.__spread = mz.copy;
});
