
export function createElement(
    type: string | WidgetCtor,
    props?: any,
    ...children: WidgetsType[]): mz.Widget {
    let ctor: WidgetCtor = null;

    if (typeof type === "string") {
        ctor = mz.widgets.BaseElement;
        let typeStr = type.toLowerCase();

        if (typeStr in mz.widgets)
            ctor = mz.widgets[typeStr];

        if (props && (<any>props) instanceof Array && !children){
            children = <any>props;
            props = null;
        }
        
        return new ctor(null, mz.copy({tag: typeStr }, props || {}), <any>children || [])
    } else ctor = <any>type;

    return new ctor(null,props || {}, <any>children || [])
}

export var __spread = mz.copy;
