import './assets/App.css'
import PageTitle from './components/PageTitle'
import PageTitleCaption from './components/PageTitleCaption'
import NavTop from './components/NavTop'
import NavBottom from './components/NavBottom'
import Copyright from './components/Copyright'
import BlogPostOne from "./components/BlogPostOne"
import BlogPostTwo from "./components/BlogPostTwo"

function App() {
  return (
    <div className="App">
      <PageTitle />
      <PageTitleCaption />
      <NavTop />
      <BlogPostOne />
      <BlogPostTwo />
      <NavBottom />
      <Copyright />
    </div>
  );
}

export default App;

/* 
NETLIFY DEPLOY
npm run build
*/