# Setup Web App React
***Setting up the frontend of a Web App using React.***

repo: `webapp-react` 

## MILESTONE 0 
***Think and prepare a plan to set up the structure of the work in order to take advantage of the reusability of React components and their props.***

  ### To build
  *⚠️ Remember to link properly (e.g., export, import, app.use('ciccio')*
  - Components
    - Header
      - Navbar
    - MovieListCard
    - MovieReviewCard
    - Footer
  - Pages
      - Home (`/movies` movies list)
      - Movie Detail (`/movies/:id` movie detail)
  - Routes
  - Controllers
  - Layouts
    - Default Layout
  - Context
    - MoviesContext (movies list, movie detail)

  ### Needed
  - React Router
  - Bootstrap and Bootstrap Icons
  - UseState, UseEffect
  - Cors (backend)

  ### Bonus
  - Style the app UI (useful resource: [Bootstrap](https://getbootstrap.com/))

## MILESTONE 1
***Setup the new React project with Vite***

- Install Vite *bash `npm create vite@latest`* (see [Vite documentation](https://vitejs.dev/guide/)) and cleanup the app from unnecessary files and code (eg. `App.css`, `logo.svg`, the *logics* and the *return content* in the `App.jsx` function, etc.)
- Install dependencies:
  - **React Router** *bash `npm install react-router-dom`* (see [React Router documentation](https://reactrouter.com/home))
  - **Bootstrap** *bash `npm install bootstrap`* (see [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/vite/))

  **No need to install Axios** (can use the native `fetch` API for AJAX calls) **or CORS** (since it is a backend middleware, see third milestone).

## MILESTONE 2
***Code the basic layout of the application and set up the routes for the different pages.***

### Create on the go the following folders and components in the `src` folder (`./src`)

- **📁 Pages** `./src/pages`
  <br>*This will be a multipage app, but for now we only implement theese two pages*
- **MoviesHome** `./src/pages/MoviesHome` *The home/landing page, where we will display the list of movies* <br> - Necessary components: `??` <br> - Export to be used in `App.jsx`
- **MovieDetails** `./src/pages/MovieDetails` *The movie detail page, where we will show information about a single movie* <br> - Necessary components: `useEffect` and `useParams` (React hooks) <br> - Export to be used in `App.jsx`

- **📁 Components** `./src/components`
- **AppHeader** `./src/components/AppHeader` *The header of the app, containing the navbar* <br> - Necessary components: `AppHeaderNavbar.jsx` <br> - Export to be used in `DefaultLayout.jsx`
- **AppHeaderNavbar** `./src/components/AppHeaderNavbar` *The navbar of the app (made with Bootstrap)* <br> - Necessary components: `??` <br> - Export to be used in `AppHeader.jsx` 
- **AppFooter** `./src/components/AppFooter` *The footer of the app* <br> - Necessary components: `??` <br> - Export to be used in `DefaultLayout.jsx`
- **MoviesListCard** `./src/components/MoviesListCard` *A card component to display movie information in the movies list*
- **MovieReviewCard** `./src/components/MovieReviewCard` *A card component to display review information in the movie detail page*
- **📁 Layouts** `./src/layouts`
<br>*For now we just need oneto mount header and footer in the home/landing page (and so in all its childrens pages)*
- **DefaultLayout** `./src/layouts/DefaultLayout` *The default layout of the app, containing the header and the footer* <br> - Necessary components: `AppHeader`, `AppFooter`, `Outlet` <br> - Export to be used in `App.jsx`

### For each page/component:
  - **Code** the page/component function and **export** it
  - If needed, code the **logic**
  - **Fill the return** content with placeholder content
  - **Import where needed** (eg., `App.jsx` / parent component)
  - Check that the page/component is properly rendered in the app
  - **Import and implement the necessary components** 
  - Check again

### In `App.jsx`
  - Import and implement the necessary components (`DefaultLayout`, `MoviesHome`, `MovieDetails`, `React`, `BrowserRouter`, `Routes`, `Route`) and `React`
  - Set up the necessary `routes` and `route` (see [Configuring Routes](https://reactrouter.com/start/declarative/routing#configuring-routes))