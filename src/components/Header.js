import PropTypes from 'prop-types'
import Button from './Button.js'

// title is destructed from props
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}/>
    </header>
  )
}

// Default props in case no props from the parent are provided
Header.defaultProps = {
  title: "Todo Tasks",
}

// Typechecking in React, will still render but with throw errors/warnings in console
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// can pass a variable holding style properties to a jsx element
// const headingStyle = {
//   color: 'red',
//   backgroundColor: '#eee'
// }

export default Header
