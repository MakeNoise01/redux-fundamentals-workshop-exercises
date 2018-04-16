import React from 'react'
import {Route, Link} from 'react-router-dom'

import {Example as Props} from './01-props'

const exercises = [
  {title: 'Props', component: Props},
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

// WORKSHOP_START
/*
eslint
no-unused-vars: 0,
*/
// WORKSHOP_END
