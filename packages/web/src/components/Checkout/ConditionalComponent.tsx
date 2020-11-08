const ConditionalComponent = ({ condition, children, otherChildren }) =>
  condition ? children : otherChildren

export default ConditionalComponent
