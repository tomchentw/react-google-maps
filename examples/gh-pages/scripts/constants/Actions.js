export const ACTIONS = [
  {
    key: `gs`,
    displayName: `Getting started`,
    path: `#gs`,
    component: {
      componentClass: require(`../components/GettingStarted`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/GettingStarted`),
      },
    },
  },
];

export const DROPDOWN_ACTIONS = [
  {
    key: `basics__simple-map`,
    displayName: `Simple Map`,
    path: `#basics/simple-map`,
    component: {
      componentClass: require(`../components/basics/SimpleMap`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/SimpleMap`),
      },
    },
  },
  {
    key: `basics__styled-map`,
    displayName: `Styled Map`,
    path: `#basics/styled-map`,
    component: {
      componentClass: require(`../components/basics/StyledMap`),
      componentProps: {
        // The style is copy from https://snazzymaps.com/style/2/midnight-commander
        fancyMapStyles: require(`./fancyMapStyles`),
      },
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/StyledMap`),
      },
    },
  },
  {
    key: `basics__geolocation`,
    displayName: `Geolocation`,
    path: `#basics/geolocation`,
    component: {
      componentClass: require(`../components/basics/Geolocation`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/Geolocation`),
      },
    },
  },
  {
    key: `basics__directions`,
    displayName: `Directions`,
    path: `#basics/directions`,
    component: {
      componentClass: require(`../components/basics/Directions`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/Directions`),
      },
    },
  },
  {
    key: `basics__overlay-view`,
    displayName: `OverlayView`,
    path: `#basics/overlay-view`,
    component: {
      componentClass: require(`../components/basics/OverlayView`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/OverlayView`),
      },
    },
  },
  {
    key: `basics__marker-clusterer`,
    displayName: `MarkerClusterer`,
    path: `#basics/marker-clusterer`,
    component: {
      componentClass: require(`../components/basics/MarkerClusterer`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/basics/MarkerClusterer`),
      },
    },
  },
  {
    key: "basics__kml-layer",
    displayName: 'KmlLayer',
    path: '#basics/kml-layer',
    component: {
      componentClass: require("../components/basics/KmlLayer"),
      componentRaw: {
        __raw: require("!raw-loader!../components/basics/KmlLayer"),
      },
    },
  },
  false,
  {
    key: `events__simple-click-event`,
    displayName: `Simple click event`,
    path: `#events/simple-click-event`,
    component: {
      componentClass: require(`../components/events/SimpleClickEvent`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/events/SimpleClickEvent`),
      },
    },
  },
  {
    key: `events__event-closure`,
    displayName: `Using closures in event listeners`,
    path: `#events/event-closure`,
    component: {
      componentClass: require(`../components/events/ClosureListeners`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/events/ClosureListeners`),
      },
    },
  },
  {
    key: `events__event-arguments`,
    displayName: `Accessing arguments in UI events`,
    path: `#events/event-arguments`,
    component: {
      componentClass: require(`../components/events/AccessingArguments`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/events/AccessingArguments`),
      },
    },
  },
  {
    key: `events__event-properties`,
    displayName: `Getting properties with event handlers`,
    path: `#events/event-properties`,
    component: {
      componentClass: require(`../components/events/GettingProperties`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/events/GettingProperties`),
      },
    },
  },
  false,
  {
    key: `drawing__drawing-tools`,
    displayName: `Drawing Tools`,
    path: `#drawing/drawing-tools`,
    component: {
      componentClass: require(`../components/drawing/DrawingTools`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/drawing/DrawingTools`),
      },
    },
  },
  false,
  {
    key: `places__search-box`,
    displayName: `Adding a Places search box`,
    path: `#places/search-box`,
    component: {
      componentClass: require(`../components/places/SearchBox`),
      componentRaw: {
        __raw: require(`!raw-loader!../components/places/SearchBox`),
      },
    },
  },
];

export const RIGHT_ACTIONS = [
  {
    key: `geojson`,
    displayName: `Geojson`,
    path: `#geojson`,
    component: {
      componentClass: require(`../components/GeojsonToComponents`),
      componentProps: {
        initialGeoJson: require(`./geojson`),
      },
      componentRaw: {
        __raw: require(`!raw-loader!../components/GeojsonToComponents`),
      },
    },
  },
];

export const ALL_ACTIONS = ACTIONS.concat(DROPDOWN_ACTIONS.filter((x) => { return !!x; })).concat(RIGHT_ACTIONS);

export const ASYNC_ACTIONS = [
  {
    key: `async-loader-getting-started`,
    displayName: `Async Loader - Getting Started`,
    path: `#async-loader-gs`,
    component: {
      componentClass: require(`../components/AsyncGettingStarted`),
      componentProps: {
      },
      componentRaw: {
        __raw: require(`!raw-loader!../components/AsyncGettingStarted`),
      },
    },
  },
];
