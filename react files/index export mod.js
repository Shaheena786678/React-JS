import ReactDOM from 'react-dom/client';
import uid, {course,duration,demo} from './mod'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h2>Exporting and Importing</h2>
  <h2>{uid}</h2>
  <h2>{course}</h2>
  <h2>{duration}</h2>
  <h2>{demo()}</h2>
  </>
)