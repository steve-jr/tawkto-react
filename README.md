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
import tawkTo from "tawkto-react";

const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = 'get_key_from_tawkto_dashboard'


componentDidMount(){
    tawkTo(tawkToPropertyId, tawkToKey)
}
```

Usage in functional component

```
import tawkTo from "tawkto-react";

const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = 'get_key_from_tawkto_dashboard'

useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
}, [])
```

Function must be called after the DOM is loaded, such as inside componentDidMount or useEffect.

## Authors

* **Steve Junior**


