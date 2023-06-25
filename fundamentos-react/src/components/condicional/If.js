/**
 * <If test={exp}>
 *  <span>...</span>
 *  <span>...</span>
 *  <span>...</span>
 * </If>
 */

export default function If(props) {
  const elseChild = props.children.filter((child) => child?.type?.name === 'Else')[0];

  const ifChildren = props.children.filter((child) => child?.type?.name !== 'Else');

  if (props.test) {
    return ifChildren
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
}