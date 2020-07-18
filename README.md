# tawkto-react

A simple script which help integrate tawk.to chat into any react application

## Getting Started

### Installing

Install package by running

```
npm install tawkto-react --save
```

Usage in class component

```
const tawkTo = require("tawkto-react");

const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'

componentDidMount(){
    tawkTo(tawkToPropertyId)
}
```

Usage in functional component

```
const tawkTo = require("tawkto-react");

const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'

useEffect(() => {
    tawkTo(tawkToPropertyId)
}, [])
```

Function must be called after the DOM is loaded, such as inside componentDidMount or useEffect.

## Authors

* **Steve Junior**


