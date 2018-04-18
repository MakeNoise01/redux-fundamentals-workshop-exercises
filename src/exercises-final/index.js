import React from 'react'
import {Route, Link} from 'react-router-dom'

import {Example as UIIntegration} from "./02-ui-integration";
import {Example as ReactRedux} from "./03-react-redux";
import {Example as Middleware} from "./04-middleware-enhancers";
import {Example as SideEffects} from "./05-side-effects";
import {Example as UnitTests} from "./06-unit-testing";
import {Example as RealWorld} from "./07-real-world";

const exercises = [
    {title : "UI Integration", component : UIIntegration},
    {title : "React-Redux", component : ReactRedux},
    {title : "Middleware", component : Middleware},
    {title : "Side Effects", component : SideEffects},
    {title : "Unit Tests", component : UnitTests},
    {title : "Real World", component : RealWorld}
].map(e => ({
  ...e,
  slug: e.title
    .split(' ')
    .join('-')
    .toLowerCase(),
}))

function Exercises({match}) {
  return (
    <div>
      {exercises.map(({slug, component}) => (
        <Route key={slug} path={`/exercise/${slug}`} component={component} />
      ))}
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

function List() {
  return (
    <div>
      <ul style={{paddingLeft: 0}}>
        {exercises.map(({slug, title}) => (
          <li key={slug}>
            <Link to={`/exercise/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercises

export {List}

