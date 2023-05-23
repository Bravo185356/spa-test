import Spinner from 'react-bootstrap/Spinner';
import classes from './Loader.module.css'

export default function Loader() {
  return (
    <div className={classes.loaderWrap}>
        <Spinner className={classes.loader} />
    </div>
  )
}
