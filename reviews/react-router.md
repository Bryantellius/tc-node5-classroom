# Review 11/22/21: React Router

- Creates different views (pages) within your react app
- `npm install react-router-dom`

## Components

- `<BrowserRouter>` - contains the routing functionality for our app
- `<Routes>` - contains and matches the url path to a route
- `<Route>` - contains the component to be rendered for a url path
- `<Link>` - navigates to a new route
- `<NavLink>` - navigates to a new route, with `isActive` boolean for active links

## Hooks

- `useParams` - returns a params object with key/value from the URL parameters
- `useNavigate` - returns a function, allowing you to programmically navigate routes
- `useLocation` - returns a location object with key/value pairs, such as `pathname: "/endpoint"...`
