import styles from './App.module.css';
import ButtonContainer from './component/ButtonContainer';
import Display from './component/Display';
function App() {

  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </>
  );
}

export default App
