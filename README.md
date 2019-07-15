# preact-dropdown

A dropdown component written with preact.

Cool thing here is that the dropdown will "deactivate" when clicked outside of it.

Important thing to know may be that a click event is registered for every DropDown instance.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Dropdown

**Extends Component**

A dropdown component

**Parameters**

- `children`  
- `Link`  => &lt;Link ...args />

**Examples**

```javascript
<DropDown Link={Button}>
  <div>
    My inner content
  </div>
</Dropdown>
```

## DropReplace

**Extends Dropdown**

Works just like DropDown but replaces the <Link>

# How it works

If you prefer a custom implementation and just wanted the "click outside" feature here's the handleClick event ; the **else if** bracket is the part where the outside clicking takes place.

It crawls up every element from the element we clicked and if the target is not the base element at any moment, it triggers a close. 

```
handleClick = ({ target }) => {
    if (target===this.base.firstChild)
        this.toggle();
    else if (this.state.open) {
        do {
            if (target===this.base) return;
        } while ((target=target.parentNode));
        this.close();
    }
}
```

Because of the wrapping div we check the .firstChild which is the provided Link.

```
(target===this.base.firstChild) 
```

# License

Original snippet taken from [preact website](https://github.com/preactjs/preact-www/blob/master/src/components/header/index.js#L64)

Code was only changed and packaged for generic usage

[MIT License](https://oss.ninja/mit/krzepah) © Patrick Borowy
